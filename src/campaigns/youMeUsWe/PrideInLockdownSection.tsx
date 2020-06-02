import React from 'react'
import { P } from '../../components/typography'
import { Video } from '../../components/video'
import { Heading } from './PrideInLockdownSection.styles'
import { SectionWrapper, MobileShareBar } from './YouMeUsWePage.styles'
import ymuw from './assets/ymuw.jpg'

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
    <Video
      host="youtube"
      videoId="TIExvoJXwKE" // TODO: get video id
      coverImage={{
        src: ymuw,
        alt: 'You! Me! Us! We! repeated in rainbow text',
      }}
      caption="Postponed, but still united: You! Me! Us! We!"
      marginTop="xl"
      maxWidth={1050}
    />
  </SectionWrapper>
)

export default PrideInLockdownSection
