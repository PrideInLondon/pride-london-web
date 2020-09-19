import { graphql } from 'gatsby'
import { FiftyTwoPage } from '../fifty-two/FiftyTwoPage'

export const query = graphql`
  query fiftyTwoPageQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
    content: contentfulCustomPageContent(title: { eq: "Fifty-Two" }) {
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
          width: 800
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
        mobile: fixed(
          width: 400
          resizingBehavior: FILL
          quality: 100
          cropFocus: FACE
        ) {
          ...GatsbyContentfulFixed_withWebp
        }
      }
      bodyText {
        json
      }
      cta {
        ctaTitle
        bodyText
        buttonUrl
        buttonText
      }
    }
    entries: allContentfulFiftyTwoGalleryEntry {
      edges {
        node {
          artwork {
            image {
              tablet: fluid(maxWidth: 480, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
              mobile: fluid(maxWidth: 320, quality: 100) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            category
            title
            year
            sold
            guidePrice
          }
          artist {
            name
          }
        }
      }
    }
  }
`

export default FiftyTwoPage
