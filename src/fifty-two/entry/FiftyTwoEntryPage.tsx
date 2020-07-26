import React from 'react'
import { graphql } from 'gatsby'
import { PageSwitcher } from '../../components/pageSwitcher/PageSwitcher'
import { FiftyTwoEntryPageProps } from './FiftyTwoEntryPage.types'

export const FiftyTwoEntryPage: React.FC<FiftyTwoEntryPageProps> = ({
  pageContext: { prev, next },
}) => {
  return (
    <div>
      <PageSwitcher
        prev={prev}
        next={next}
        back={{
          title: 'Back to gallery',
          url: '/fifty-two',
        }}
      />
    </div>
  )
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
