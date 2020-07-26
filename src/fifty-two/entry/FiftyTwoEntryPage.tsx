import React from 'react'
import { graphql } from 'gatsby'

export const FiftyTwoEntryPage: React.FC = props => {
  console.log(props)
  return <div>hello world</div>
}

export const query = graphql`
  query fiftyTwoEntry($id: String!) {
    contentfulFiftyTwoGalleryEntry(id: { eq: $id }) {
      id
      entryName
      artwork {
        id
        title
        category
        info
        year
        guidePrice
        sold
        description {
          json
        }
      }
      artist {
        id
        name
        website
        instagram
        email
        facebook
        bio {
          json
        }
      }
    }
  }
`

export default FiftyTwoEntryPage
