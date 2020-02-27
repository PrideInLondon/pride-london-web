import { graphql } from 'gatsby'
import { ExploreLondonPage } from '../exploreLondon'

export const query = graphql`
  query CommunityPartnersQuery {
    allContentfulCommunityPartner(sort: { fields: venueName, order: ASC }) {
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
  }
`

export default ExploreLondonPage
