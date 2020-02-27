import path from 'path'
import moment from 'moment'
import {
  sanitizeDates,
  getDuration,
  filterPastEvents,
  generateEventSlug,
} from './src/events/helpers'
import constants from './src/constants'

const ArticlePage = path.resolve('./src/blog/article/ArticlePage.js')
const EventPage = path.resolve('./src/events/event/EventPage.js')
const GenericContentPage = path.resolve(
  './src/genericContentPage/GenericContentPage.js'
)

exports.sourceNodes = ({ actions: { createTypes } }) =>
  createTypes(`
    type ContentfulEvent implements Node {
      sponsorSection: ContentfulSponsorSection @link(from: "sponsorSection___NODE")
    }
    type ContentfulSponsorSection implements Node {
      displayName: String!
      sponsors: [ContentfulSponsor!] @link(from: "sponsors___NODE")
    }
  `)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
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

    result.data.genericContentPages.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.slug}/`,
        component: GenericContentPage,
        context: {
          id: edge.node.id,
        },
      })
    })

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
            path: generateEventSlug({ ...edge.node }),
            component: EventPage,
            context: {
              id: edge.node.id,
              startTime: edge.node.startTime,
              endTime: edge.node.endTime,
            },
          })
        }
      } else {
        sanitizeDates([
          moment(edge.node.startTime).format(constants.dateFormat),
          ...edge.node.recurrenceDates,
        ]).forEach(date => {
          const originalStartTime = moment(edge.node.startTime)
          const startTime = moment(date, constants.dateFormat)
            .hours(originalStartTime.hours())
            .minutes(originalStartTime.minutes())
            .toISOString()
          const endTime = moment(startTime)
            .add(getDuration(edge.node.startTime, edge.node.endTime), 'ms')
            .toISOString()
          if (filterPastEvents(endTime)) {
            createPage({
              path: generateEventSlug({
                ...edge.node,
                occurrence: startTime,
              }),
              component: EventPage,
              context: {
                id: edge.node.id,
                startTime,
                endTime,
              },
            })
          }
        })
      }
    })

    result.data.articles.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.slug}/`,
        component: ArticlePage,
        context: {
          id: edge.node.id,
        },
      })
    })
  })

  return events
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /@typeform/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
