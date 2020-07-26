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
    <Wrapper padding={{ default: 'lg', md: 'xl' }}>
      <Column
        width={{ default: '100%', md: '60%' }}
        paddingRight={{ default: '0', md: `${xxl}px`, lg: `${xxl * 2}px` }}
      >
        <Image
          fluid={
            checkBreakpoint(md) ? artwork.image.tablet : artwork.image.mobile
          }
        />
        <AboutTheArtist {...artist} />
      </Column>
      <Column width={{ default: '100%', md: '40%' }}>
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
          tablet: fluid(maxWidth: 740, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
          }
          mobile: fluid(maxWidth: 320, quality: 100) {
            ...GatsbyContentfulFluid_withWebp
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
