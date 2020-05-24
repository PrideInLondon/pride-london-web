import React from 'react'
import { colors } from '../../theme/colors'
import { Wrapper, StyledTag, PlaceholderDiv } from './YouMeUsWePage.styles'
import Mark from './Mark'
import PrideInLockdownSection from './PrideInLockdownSection'
import ActsOfAllyshipSection from './ActsOfAllyshipSection'
import ForEveryKindSection from './ForEveryKindSection'
import SupportingTheCommunitySection from './SupportingTheCommunitySection'

const YouMeUsWePage = () => (
  <>
    <PlaceholderDiv name="Banner" style={{ height: 800 }} />
    <Wrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <PrideInLockdownSection />
      <ActsOfAllyshipSection />
      <Mark />
      <PlaceholderDiv name="Image" style={{ height: 1000 }} />
      <ForEveryKindSection />
      <Mark />
      <SupportingTheCommunitySection />
    </Wrapper>
  </>
)

export default YouMeUsWePage
