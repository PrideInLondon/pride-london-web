import path from 'path'
import { filterPastEvents, generateEventSlug } from './src/events/helpers'

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
  await graphql(`
    {
      events: allContentfulEvent(
        filter: {
          date: { dates: { elemMatch: { endDate: { gte: "${new Date().toISOString()}" } } } }
        }
      ) {
        edges {
          node {
            id
            name
            date {
              dates {
                id
                startDate
                endDate
              }
            }
          }
        }
      }
      genericContentPages: allContentfulGenericContentPage {
        edges {
          node {
            id
            slug
          }
        }
      }
      articles: allContentfulArticle {
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

    // don't create pages for past events
    result.data.events.edges.forEach(edge => {
      const endTime =
        edge.node.date.dates[edge.node.date.dates.length - 1].endDate
      const startTime = edge.node.date.dates[0].startDate
      if (filterPastEvents(endTime)) {
        createPage({
          path: generateEventSlug({ ...edge.node }),
          component: EventPage,
          context: {
            id: edge.node.id,
            startTime,
            endTime,
          },
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
