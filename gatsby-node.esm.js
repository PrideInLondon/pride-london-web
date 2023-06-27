import path from 'path'
import fs from 'fs'
import { generateEventSlug } from './src/events/helpers'
import { generateBlogArticleSlug } from './src/blog/article/helpers'

const ArticlePage = path.resolve('./src/blog/article/ArticlePage.js')
const EventPage = path.resolve('./src/events/event/EventPage.js')
const GenericContentPage = path.resolve(
  './src/genericContentPage/GenericContentPage.js'
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

exports.createPages = async ({
  graphql,
  actions: { createPage, createRedirect },
}) => {
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
      blogArticles: allContentfulBlogArticle {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    result.data.genericContentPages.edges.forEach((edge) => {
      createPage({
        path: `/${edge.node.slug}/`,
        component: GenericContentPage,
        context: {
          id: edge.node.id,
        },
      })
    })

    result.data.events.edges.forEach((edge) =>
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

    result.data.articles.edges.forEach((edge) => {
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

  const redirects = fs.readFileSync('./gatsby-redirects.txt').toString()

  for (const line of redirects.split('\n')) {
    if (line.startsWith('#')) {
      // Allow comments in the file
      continue
    }
    if (line.trim().length > 0) {
      // Parse line
      /*
        Format is <Source> <Destination> (<Code>(<!>))
        NON-FUNCTIONAL: Including the ! should force a redirect even if there is a valid route
        () Indicates Optional
      */
      const [rdrFrom, rdrTo, rdrOptions] = line.trim().split(/\s+/)
      var statusCode = 301 // Mirror Netlify behaviour
      var forced = false // Currently non-functional
      if (rdrOptions) {
        if (rdrOptions.endsWith('!')) {
          forced = true
        }
        statusCode = rdrOptions.substring(0, 3)
        console.log(
          `Redirect from ${rdrFrom} to ${rdrTo} with ${rdrOptions} (code: ${statusCode} forced: ${forced})`
        )
      }
      createRedirect({
        fromPath: rdrFrom,
        toPath: rdrTo,
        statusCode: statusCode,
        force: forced, // Currently ignored by gatsby-plugin-gatsby-cloud
      })
    }
  }

  console.log('Zed-hack: Imported Netlfify Redirects into Gatsby Format')
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
  /* This didn't work but would be cleaner than the webpack loader override in LayoutHelmet.js */
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /(apple-touch-icon|favicon|mstile).*\.pnfakeg$/,
          use: [loaders.file({
            name: 'static/favicons/[name]-[hash].png',
          })],
        },
      ],
    },
  })
}

exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  const typeDefs = `
    type ContentfulBlogArticle implements Node {
      hero: ContentfulAsset! @link(by: "id", from: "hero___NODE")
      category: String!
      title: String!
      content: contentfulBlogArticleContentRichTextNode! @link(by: "id", from: "content___NODE")
      author: ContentfulTalentProfile
    }

    type contentfulBlogArticleContentRichTextNode implements Node { 
      json: JSON!
    }

    type ContentfulTalentProfile implements Node {
      bio: contentfulTalentProfileBioRichTextNode @link(by: "id", from: "bio___NODE")
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
