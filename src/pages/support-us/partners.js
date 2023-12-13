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
            gatsbyImageData(layout: CONSTRAINED, height: 168, quality: 90)
          }
          sponsorLevel
        }
      }
    }
  }
`

export default PartnersPage
