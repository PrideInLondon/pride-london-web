import path from 'path'
import { generateEventSlug } from './src/events/helpers'
import { generateFiftyTwoEntrySlug } from './src/fifty-two/helpers'
import { generateBlogArticleSlug } from './src/blog/article/helpers'

const ArticlePage = path.resolve('./src/blog/article/ArticlePage.js')
const EventPage = path.resolve('./src/events/event/EventPage.js')
const GenericContentPage = path.resolve(
  './src/genericContentPage/GenericContentPage.js'
)
const FiftyTwoEntryPage = path.resolve(
  './src/fifty-two/entry/FiftyTwoEntryPage.tsx'
)
const BlogArticlePage = path.resolve('./src/blog/article/BlogArticlePage.tsx')

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
            artwork {
              title
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
      blogArticles: allContentfulBlogArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const entries = result.data.galleryFiftyTwoEntries.edges
    entries.forEach((edge, index) => {
      createPage({
        path: generateFiftyTwoEntrySlug(edge.node.artist.name),
        component: FiftyTwoEntryPage,
        context: {
          id: edge.node.id,
          prev: {
            title:
              index > 0
                ? entries[index - 1].node.artwork.title
                : entries[entries.length - 1].node.artwork.title,
            subtitle:
              index > 0
                ? entries[index - 1].node.artist.name
                : entries[entries.length - 1].node.artist.name,
            url:
              index > 0
                ? generateFiftyTwoEntrySlug(entries[index - 1].node.artist.name)
                : generateFiftyTwoEntrySlug(
                    entries[entries.length - 1].node.artist.name
                  ),
          },
          next: {
            title:
              index < entries.length - 1
                ? entries[index + 1].node.artwork.title
                : entries[0].node.artwork.title,
            subtitle:
              index < entries.length - 1
                ? entries[index + 1].node.artist.name
                : entries[0].node.artist.name,
            url:
              index < entries.length - 1
                ? generateFiftyTwoEntrySlug(entries[index + 1].node.artist.name)
                : generateFiftyTwoEntrySlug(entries[0].node.artist.name),
          },
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

    result.data.blogArticles.edges.forEach(({ node: { id, title } }) => {
      createPage({
        path: generateBlogArticleSlug(title),
        component: BlogArticlePage,
        context: { id },
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

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type ContentfulBlogArticle implements Node {
      hero: ContentfulAsset!
      category: String!
      title: String!
      content: contentfulBlogArticleContentRichTextNode!
      author: ContentfulTalentProfile
    }

    type contentfulBlogArticleContentRichTextNode implements Node { 
      json: JSON!
    }

    type ContentfulTalentProfile implements Node {
      bio: contentfulTalentProfileBioRichTextNode
      website: String
      email: String
      facebook: String
      twitter: String
      instagram: String
    }

    type contentfulTalentProfileBioRichTextNode implements Node { 
      json: JSON!
    }
  `
  createTypes(typeDefs)
}
