import { graphql } from 'gatsby'
import { ParadeGroupsPage } from '../../parade'

export const query = graphql`
  query paradeGroups($eq: String = "2023") {
    paradeGroups: allContentfulParadeGroup2019(
      sort: { fields: [name], order: ASC }
      filter: { yearsMarched: { eq: $eq } }
    ) {
      edges {
        node {
          name
          category
          websiteUrl
          twitterUrl
          facebookUrl
          instagramUrl
          emailUrl
          yearsMarched
        }
      }
    }
  }
`

export default ParadeGroupsPage
