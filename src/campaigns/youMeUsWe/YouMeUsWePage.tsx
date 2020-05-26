import React from 'react'
import { colors } from '../../theme/colors'
import {
  DesktopShareBarWrapper,
  DesktopShareBar,
  Wrapper,
  StyledTag,
  PlaceholderDiv,
} from './YouMeUsWePage.styles'
import Mark from './Mark'
import PrideInLockdownSection from './PrideInLockdownSection'
import ActsOfAllyshipSection from './ActsOfAllyshipSection'
import ForEveryKindSection from './ForEveryKindSection'
import SupportingTheCommunitySection from './SupportingTheCommunitySection'
import ActsOfKindnessSection from './ActsOfKindnessSection'
import ShareYourStorySection from './ShareYourStorySection'

const YouMeUsWePage = () => (
  <>
    <PlaceholderDiv name="Banner" style={{ height: 800 }} />
    <Wrapper>
      <DesktopShareBarWrapper>
        <DesktopShareBar
          variant="vertical"
          content={{ title: '', body: '', url: '' }} // TODO: get real content
        />
      </DesktopShareBarWrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <PrideInLockdownSection />
      <ActsOfAllyshipSection />
      <Mark />
      <PlaceholderDiv name="Image" style={{ height: 1000 }} />
      <ForEveryKindSection />
      <Mark />
      <SupportingTheCommunitySection />
      <PlaceholderDiv name="Image" style={{ height: 1000, marginTop: 40 }} />
      <ActsOfKindnessSection />
      <PlaceholderDiv name="Image" style={{ height: 1000, marginTop: 40 }} />
      <ShareYourStorySection />
      <PlaceholderDiv name="Image" style={{ height: 1000, marginTop: 40 }} />
    </Wrapper>
  </>
)

export default YouMeUsWePage
