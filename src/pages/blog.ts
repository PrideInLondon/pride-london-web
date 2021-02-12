import { graphql } from 'gatsby'
import { BlogPage } from '../blog/BlogPage'

export const query = graphql`
  query blogPageQuery {
    contentfulCustomPageContent(title: { eq: "Blog" }) {
      title
      subtitle
      bannerImage {
        desktop: fixed(
          width: 1600
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        tablet: fixed(
          width: 768
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        mobile: fixed(
          width: 375
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
    }
  }
`

export default BlogPage
