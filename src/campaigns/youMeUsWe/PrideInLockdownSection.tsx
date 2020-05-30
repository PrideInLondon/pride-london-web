import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import { P } from '../../components/typography'
import { Video } from '../../components/video'
import { getImageForBreakpoint } from '../../utils/style-utils'
import { Heading } from './PrideInLockdownSection.styles'
import { SectionWrapper, MobileShareBar } from './YouMeUsWePage.styles'

export const query = graphql`
  query PrideInLockdownSectionQuery {
    file(relativePath: { regex: "/campaigns/youMeUsWe/assets/ymuw/" }) {
      name
      childImageSharp {
        mobile: fixed(width: 327, height: 184) {
          ...GatsbyImageSharpFixed
        }
        tablet: fixed(width: 780, height: 450) {
          ...GatsbyImageSharpFixed
        }
        desktop: fixed(width: 1050, height: 591) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const PrideInLockdownSection = () => (
  <SectionWrapper>
    <Heading as="h2">Pride in Lockdown</Heading>
    <MobileShareBar variant="horizontal" />
    <P variant="lg" marginTop={{ md: '0', default: 'xl' }}>
      Every year the capital sees over a million volunteers, artists and
      Pride-goers come together, united in their support of the LGBT+ community.
    </P>
    <P>
      Although we may not be marching this year, now more than ever, we cannot
      lose sight of how important it is to support and celebrate our incredible
      community.
    </P>
    <P>
      That's why we're taking our theme for 2020, #YouMeUsWe, online. It calls
      on each of us to reach out and understand one another, demanding us to be
      better allies within our own community.
    </P>
    <P>
      Watch our video below on why support during lockdown has meant so much for
      members of our community, and scroll down to find out how you can make an
      act of allyship.
    </P>
    <StaticQuery query={query}>
      {({ file: { childImageSharp } }) => (
        <Video
          host="youtube"
          videoId="TIExvoJXwKE" // TODO: get video id
          coverImage={{
            image: getImageForBreakpoint(childImageSharp),
            alt: '', // TODO: alt text
          }}
          caption="Lorem ipsum blah blah blah" // TODO: get caption
          marginTop="xl"
          width={1000}
        />
      )}
    </StaticQuery>
  </SectionWrapper>
)

export default PrideInLockdownSection
