import { graphql } from 'gatsby'
import { PartnersPage } from '../../sponsors'

export const query = graphql`
  query sponsorsQuery {
    allContentfulSponsor(
      filter: {}
      sort: { fields: [sponsorName], order: DESC }
    ) {
      edges {
        node {
          sponsorName
          sponsorUrl
          sponsorLogo {
            sizes(maxHeight: 168, quality: 90) {
              src
            }
          }
          sponsorLevel
        }
      }
    }
  }
`

export default PartnersPage
