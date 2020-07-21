import path from 'path'
import { generateEventSlug } from './src/events/helpers'

const ArticlePage = path.resolve('./src/blog/article/ArticlePage.js')
const EventPage = path.resolve('./src/events/event/EventPage.js')
const GenericContentPage = path.resolve(
  './src/genericContentPage/GenericContentPage.js'
)
const FiftyTwoDetailPage = path.resolve(
  './src/fifty-two/FiftyTwoDetailPage.tsx'
)

function createFiftyTwoSlug(name) {
  return `/fifty-two/${name
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase()}`
}

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
      galleryFiftyTwoEntries: allContentfulFiftyTwoGalleryEntry {
        edges {
          node {
            id
            artist {
              name
            } 
          }
        }
      }
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

    result.data.galleryFiftyTwoEntries.edges.forEach((edge, index) => {
      createPage({
        path: createFiftyTwoSlug(edge.node.artist.name),
        component: FiftyTwoDetailPage,
        context: {
          id: edge.node.id,
          prev:
            index > 0
              ? createFiftyTwoSlug(
                  result.data.galleryFiftyTwoEntries.edges[index - 1].node
                    .artist.name
                )
              : null,
          next:
            index < result.data.galleryFiftyTwoEntries.edges.length
              ? createFiftyTwoSlug(
                  result.data.galleryFiftyTwoEntries.edges[index + 1].node
                    .artist.name
                )
              : null,
        },
      })
    })

    result.data.genericContentPages.edges.forEach(edge => {
      createPage({
        path: `/${edge.node.slug}/`,
        component: GenericContentPage,
        context: {
          id: edge.node.id,
        },
      })
    })

    result.data.events.edges.forEach(edge =>
      createPage({
        path: generateEventSlug({ ...edge.node }),
        component: EventPage,
        context: {
          id: edge.node.id,
          startDate: edge.node.date.dates[0].startDate,
          endDate:
            edge.node.date.dates[edge.node.date.dates.length - 1].endDate,
        },
      })
    )

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
