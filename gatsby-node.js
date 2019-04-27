const path = require('path')
const moment = require('moment')
const {
  sanitizeDates,
  getDuration,
  filterPastEvents,
} = require('./src/features/events/helpers')
const { dateFormat } = require('./src/constants')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const events = await graphql(`
    {
      events: allContentfulEvent(filter: {}) {
        edges {
          node {
            id
            name
            recurrenceDates
            startTime
            endTime
          }
        }
      }
      genericContentPages: allContentfulGenericContentPage(filter: {}) {
        edges {
          node {
            id
            slug
          }
        }
      }
      articles: allContentfulArticle(filter: {}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const GenericContentPage = path.resolve(
      './src/templates/genericContentPage.js'
    )

    result.data.genericContentPages.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.slug}/`,
        component: GenericContentPage,
        context: {
          id: edge.node.id,
        },
      })
    })

    const eventTemplate = path.resolve('./src/templates/event.js')
    // Don't create pages for past events
    result.data.events.edges.forEach(edge => {
      if (!edge.node.recurrenceDates) {
        //   Filter past events
        if (filterPastEvents(edge)) {
          createPage({
            // Each page is required to have a `path` as well
            // as a template component. The `context` is
            // optional but is often necessary so the template
            // can query data specific to each page.
            path: `/events/${edge.node.id}/`,
            component: eventTemplate,
            context: {
              id: edge.node.id,
              startTime: edge.node.startTime,
              endTime: edge.node.endTime,
            },
          })
        }
      } else {
        const recurrenceDates = sanitizeDates([
          moment(edge.node.startTime).format(dateFormat),
          ...edge.node.recurrenceDates,
        ])

        recurrenceDates.filter(filterPastEvents).forEach(date => {
          const customId = `${edge.node.id}-${date.split('/').join('')}`
          const originalStartTime = moment(edge.node.startTime)
          const startTime = moment(date, dateFormat)
            .hours(originalStartTime.hours())
            .minutes(originalStartTime.minutes())
            .toISOString()
          const endTime = moment(startTime)
            .add(getDuration(edge.node.startTime, edge.node.endTime), 'ms')
            .toISOString()

          createPage({
            path: `/events/${customId}/`,
            component: eventTemplate,
            context: {
              id: edge.node.id,
              startTime,
              endTime,
            },
          })
        })
      }
    })

    const blogDetailsTemplate = path.resolve('./src/templates/blogDetails.js')
    result.data.articles.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.slug}/`,
        component: blogDetailsTemplate,
        context: {
          id: edge.node.id,
        },
      })
    })
  })
  return events
}
