import { graphql } from 'gatsby'
import { ParadeGroupsPage } from '../../parade'

export const query = graphql`
  query paradeGroups {
    paradeGroups: allContentfulParadeGroup2023(
      filter: { yearsMarched: { eq: "2024" } }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          name
          description {
            description
          }
          websiteUrl
          linkedinUrl
          twitterUrl
          facebookUrl
          tikTokUrl
          instagramUrl
          snapChatHandle
        }
      }
    }
  }
`

export default ParadeGroupsPage
