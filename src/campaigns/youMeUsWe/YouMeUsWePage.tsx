import React from 'react'
import { colors } from '../../theme/colors'
import YouMeUsWePageHelmet from './YouMeUsWePageHelmet'
import {
  BannerBackgroundImage,
  BannerMark,
  DesktopShareBar,
  Wrapper,
  StyledTag,
  FeaturedImage,
} from './YouMeUsWePage.styles'
import Mark from './Mark'
import PrideInLockdownSection from './PrideInLockdownSection'
import ActsOfAllyshipSection from './ActsOfAllyshipSection'
import ForEveryKindSection from './ForEveryKindSection'
import DonateToYourCommunitySection from './DonateToYourCommunitySection'
import BeThereForYourCommunitySection from './BeThereForYourCommunitySection'
import CelebrateYourCommunitySection from './CelebrateYourCommunitySection'
import rallying from './assets/rallying.jpg'
import different from './assets/different.jpg'
import sunshine from './assets/sunshine.jpg'
import ymuw from './assets/ymuw.jpg'
import { YouMeUsWePageProps } from './YouMeUseWePage.types'

const YouMeUsWePage = (props: YouMeUsWePageProps) => (
  <>
    <YouMeUsWePageHelmet {...props} />
    <BannerBackgroundImage>
      <BannerMark />
    </BannerBackgroundImage>
    <Wrapper>
      <DesktopShareBar />
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <PrideInLockdownSection />
      <ActsOfAllyshipSection />
      <Mark />
      <FeaturedImage src={rallying} />
      <ForEveryKindSection />
      <Mark />
      <DonateToYourCommunitySection />
      <FeaturedImage src={different} marginTop="xl" />
      <BeThereForYourCommunitySection />
      <FeaturedImage src={sunshine} marginTop="xl" />
      <CelebrateYourCommunitySection />
      <FeaturedImage src={ymuw} marginY="xl" />
    </Wrapper>
  </>
)

export default YouMeUsWePage
