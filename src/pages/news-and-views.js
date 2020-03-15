import { graphql } from 'gatsby'
import { NewsAndViewsPage } from '../blog'

export const query = graphql`
  query articlesQuery {
    articles: allContentfulArticle(
      filter: { category: { ne: "Views" } }
      sort: { fields: [datePublished], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          readTime
          category
          datePublished
        }
      }
    }

    views: allContentfulArticle(
      filter: { category: { eq: "Views" } }
      sort: { fields: [datePublished], order: DESC }
    ) {
      edges {
        node {
          id
          slug
          title
          readTime
          category
          datePublished
          headerImage {
            file {
              url
            }
          }
          featuredImage {
            title
            fixed(
              width: 400
              height: 400
              resizingBehavior: FILL
              quality: 90
              cropFocus: FACE
            ) {
              ...GatsbyContentfulFixed
            }
          }
          author {
            displayName
          }
        }
      }
    }
  }
`

export default NewsAndViewsPage
