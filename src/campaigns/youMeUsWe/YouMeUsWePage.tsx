import React from 'react'
import { colors } from '../../theme/colors'
import {
  BannerBackgroundImage,
  BannerMark,
  DesktopShareBarWrapper,
  DesktopShareBar,
  Wrapper,
  StyledTag,
  FeaturedImage,
} from './YouMeUsWePage.styles'
import Mark from './Mark'
import PrideInLockdownSection from './PrideInLockdownSection'
import ActsOfAllyshipSection from './ActsOfAllyshipSection'
import ForEveryKindSection from './ForEveryKindSection'
import SupportingTheCommunitySection from './SupportingTheCommunitySection'
import ActsOfKindnessSection from './ActsOfKindnessSection'
import ShareYourStorySection from './ShareYourStorySection'
import rallying from './assets/rallying/image.jpg'
import different from './assets/different/image.jpg'
import sunshine from './assets/sunshine/image.jpg'
import ymuw from './assets/ymuw.jpg'

const YouMeUsWePage = () => (
  <>
    <BannerBackgroundImage>
      <BannerMark />
    </BannerBackgroundImage>
    <Wrapper>
      <DesktopShareBarWrapper>
        <DesktopShareBar variant="vertical" />
      </DesktopShareBarWrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <PrideInLockdownSection />
      <ActsOfAllyshipSection />
      <Mark />
      <FeaturedImage src={rallying} />
      <ForEveryKindSection />
      <Mark />
      <SupportingTheCommunitySection />
      <FeaturedImage src={different} marginTop="xl" />
      <ActsOfKindnessSection />
      <FeaturedImage src={sunshine} marginTop="xl" />
      <ShareYourStorySection />
      <FeaturedImage src={ymuw} marginY="xl" />
    </Wrapper>
  </>
)

export default YouMeUsWePage
