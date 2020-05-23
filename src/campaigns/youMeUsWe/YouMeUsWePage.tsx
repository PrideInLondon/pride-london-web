import React from 'react'
import { fonts } from '../../theme/fonts'
import { colors } from '../../theme/colors'
import { P } from '../../components/typography'
import {
  Wrapper,
  StyledTag,
  CelebratingHeading,
  CelebratingContentWrapper,
  ActsOfAllyshipHeading,
  PlaceholderDiv,
} from './YouMeUsWePage.styles'

const YouMeUsWePage = () => (
  <>
    <PlaceholderDiv name="Banner" style={{ height: 800 }} />
    <Wrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <CelebratingHeading fontFamily={fonts.cactus} as="h2">
        Celebrating allyship and standing up for one another.
      </CelebratingHeading>
      <CelebratingContentWrapper>
        <P variant="lg">
          We're as gutted as you are that the Parade isn't happening this year.
          But, rest assured, we plan on making sure that the LGBTQ+ community
          still feels the love, celebration and support it deserves this Pride
          Month.
        </P>
        <P>
          We may have had to move from our streets to our screens, but our theme
          for 2020, #YouMeUsWe, still stands. No matter your identity, it calls
          on each of us to reach out and understand one another, demanding us to
          be better allies within our own community.
        </P>
      </CelebratingContentWrapper>
      <PlaceholderDiv
        name="Video"
        style={{
          height: 600,
          maxWidth: 1050,
          marginTop: 80,
        }}
      />
      <ActsOfAllyshipHeading />
    </Wrapper>
  </>
)

export default YouMeUsWePage
