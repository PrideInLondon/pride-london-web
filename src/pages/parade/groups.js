import { graphql } from 'gatsby'
import { ParadeGroupsPage } from '../../parade'

export const query = graphql`
  query paradeGroups {
    paradeGroups: allContentfulParadeGroup2019(
      sort: { fields: [name], order: ASC }
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
        }
      }
    }
  }
`

export default ParadeGroupsPage
