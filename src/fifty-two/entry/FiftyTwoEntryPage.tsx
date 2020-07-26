import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image/withIEPolyfill'
import { Helmet } from '../../components/helmet'
import { PageSwitcher } from '../../components/pageSwitcher/PageSwitcher'
import { xxl } from '../../theme/space'
import { md } from '../../theme/breakpoints'
import { checkBreakpoint } from '../../utils/style-utils'
import { AgeVerification } from '../AgeVerification'
import { Heading, Wrapper, Column } from './FiftyTwoEntryPage.styles'
import { AboutTheArtist } from './AboutTheArtist'
import { AboutTheArtwork } from './AboutTheArtwork'
import { FiftyTwoEntryPageProps } from './FiftyTwoEntryPage.types'

export const FiftyTwoEntryPage: React.FC<FiftyTwoEntryPageProps> = ({
  data: {
    contentfulFiftyTwoGalleryEntry: { artist, artwork },
  },
  pageContext: { prev, next },
}) => (
  <>
    <Helmet title={artist.name} />
    <Heading>{artist.name}</Heading>
    <Wrapper padding="xl">
      <Column width="60%" paddingRight={`${xxl * 2}px`}>
        <Image
          fixed={
            checkBreakpoint(md) ? artwork.image.tablet : artwork.image.mobile
          }
        />
        <AboutTheArtist {...artist} />
      </Column>
      <Column width="40%">
        <AboutTheArtwork artist={artist} artwork={artwork} />
      </Column>
    </Wrapper>
    <PageSwitcher
      prev={prev}
      next={next}
      back={{
        title: 'Back to gallery',
        url: '/fifty-two-2',
      }}
    />
    <AgeVerification />
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
        image {
          tablet: fixed(width: 740, resizingBehavior: FILL, quality: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
          mobile: fixed(width: 320, resizingBehavior: FILL, quality: 100) {
            ...GatsbyContentfulFixed_withWebp
          }
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
