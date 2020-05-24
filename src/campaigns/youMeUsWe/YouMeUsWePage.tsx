import React from 'react'
import { colors } from '../../theme/colors'
import { Wrapper, StyledTag, PlaceholderDiv } from './YouMeUsWePage.styles'
import Mark from './Mark'
import CelebratingAllyshipSection from './CelebratingAllyshipSection'
import ActsOfAllyshipSection from './ActsOfAllyshipSection'
import ForEveryKindSection from './ForEveryKindSection'

const YouMeUsWePage = () => (
  <>
    <PlaceholderDiv name="Banner" style={{ height: 800 }} />
    <Wrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <CelebratingAllyshipSection />
      <ActsOfAllyshipSection />
      <Mark />
      <PlaceholderDiv name="Image" style={{ height: 1000 }} />
      <ForEveryKindSection />
      <Mark />
    </Wrapper>
  </>
)

export default YouMeUsWePage
