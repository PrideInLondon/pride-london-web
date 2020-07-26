import React from 'react'
import { graphql } from 'gatsby'
import { PageSwitcher } from '../../components/pageSwitcher/PageSwitcher'
import { xxl } from '../../theme/space'
import { Wrapper, Column } from './FiftyTwoEntryPage.styles'
import { AboutTheArtist } from './AboutTheArtist'
import { FiftyTwoEntryPageProps } from './FiftyTwoEntryPage.types'

export const FiftyTwoEntryPage: React.FC<FiftyTwoEntryPageProps> = ({
  data: {
    contentfulFiftyTwoGalleryEntry: { artist },
  },
  pageContext: { prev, next },
}) => (
  <>
    <Wrapper padding="xl">
      <Column flexGrow={3} paddingRight={`${xxl * 2}px`}>
        <div style={{ border: 'solid black 1px', height: 1032 }}>
          Image placeholder
        </div>
        <AboutTheArtist {...artist} />
      </Column>
      <Column flexGrow={2}>right</Column>
    </Wrapper>
    <PageSwitcher
      prev={prev}
      next={next}
      back={{
        title: 'Back to gallery',
        url: '/fifty-two-2',
      }}
    />
  </>
)

export const query = graphql`
  query fiftyTwoEntry($id: String!) {
    contentfulFiftyTwoGalleryEntry(id: { eq: $id }) {
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
        twitter
        bio {
          json
        }
      }
    }
  }
`

export default FiftyTwoEntryPage
