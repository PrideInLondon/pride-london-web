import { graphql } from 'gatsby'
import { ExploreLondonPage } from '../exploreLondon'

export const query = graphql`query CommunityPartnersQuery {
  file(relativePath: {regex: "/exploreLondon/heroImage/"}) {
    size
    name
    childImageSharp {
      desktop: gatsbyImageData(width: 1600, quality: 100, layout: FIXED)
      tablet: fixed(width: 800, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
      mobile: fixed(width: 400, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
  allContentfulCommunityPartner(sort: {fields: venueName, order: ASC}) {
    edges {
      node {
        id
        venueName
        location {
          lon
          lat
        }
        addressLine1
        addressLine2
        city
        postcode
        description {
          description
        }
        category
        accessibilityDetails
        genderNeutralToilets
        featuredImage {
          id
          fixed(
            width: 400
            height: 235
            resizingBehavior: FILL
            quality: 90
            cropFocus: FACE
          ) {
            ...GatsbyContentfulFixed
          }
        }
        websiteUrl
        twitterUrl
        facebookUrl
        instagramUrl
      }
    }
  }
}`

export default ExploreLondonPage
