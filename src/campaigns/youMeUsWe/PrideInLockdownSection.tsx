import React from 'react'
import { fonts } from '../../theme/fonts'
import { P } from '../../components/typography'
import { Heading, Content } from './PrideInLockdownSection.styles'
import { PlaceholderDiv } from './YouMeUsWePage.styles' // TODO: replace with real

const PrideInLockdownSection = () => (
  <>
    <Heading fontFamily={fonts.cactus} as="h2">
      Pride in Lockdown
    </Heading>
    <Content>
      <P variant="lg">
        Every year the capital sees over a million volunteers, artists and
        Pride-goers come together, united in their support of the LGBT+
        community.
      </P>
      <P>
        Although we may not be marching this year, now more than ever, we cannot
        lose sight of how important it is to support and celebrate our
        incredible community.
      </P>
      <P>
        That's why we're taking our theme for 2020, #YouMeUsWe, online. It calls
        on each of us to reach out and understand one another, demanding us to
        be better allies within our own community.
      </P>
      <P>
        Watch our video below on why support during lockdown has meant so much
        for members of our community, and scroll down to find out how you can
        make an act of allyship.
      </P>
    </Content>
    <PlaceholderDiv
      name="Video"
      style={{
        height: 600,
        maxWidth: 1050,
        marginTop: 80,
      }}
    />
  </>
)

export default PrideInLockdownSection
