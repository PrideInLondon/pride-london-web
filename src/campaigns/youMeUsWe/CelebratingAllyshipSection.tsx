import React from 'react'
import { fonts } from '../../theme/fonts'
import { P } from '../../components/typography'
import { Heading, Content } from './CelebratingAllyship.styles'
import { PlaceholderDiv } from './YouMeUsWePage.styles' // TODO: replace with real

const CelebratingAllyshipSection = () => (
  <>
    <Heading fontFamily={fonts.cactus} as="h2">
      Celebrating allyship and standing up for one another.
    </Heading>
    <Content>
      <P variant="lg">
        We're as gutted as you are that the Parade isn't happening this year.
        But, rest assured, we plan on making sure that the LGBTQ+ community
        still feels the love, celebration and support it deserves this Pride
        Month.
      </P>
      <P>
        We may have had to move from our streets to our screens, but our theme
        for 2020, #YouMeUsWe, still stands. No matter your identity, it calls on
        each of us to reach out and understand one another, demanding us to be
        better allies within our own community.
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

export default CelebratingAllyshipSection
