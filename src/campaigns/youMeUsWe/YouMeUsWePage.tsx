import React from 'react'
import { colors } from '../../theme/colors'
import { TornBackground } from '../../components/tornBackground/TornBackground'
import YouMeUsWePageHelmet from './YouMeUsWePageHelmet'
import {
  BannerBackgroundImage,
  BannerMark,
  DesktopShareBarWrapper,
  DesktopShareBar,
  ChildrenWrapper,
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
    <TornBackground
      BackgroundComponent={BannerBackgroundImage}
      bottomTear={{
        ripType: 4,
        color: '#fff',
        height: 130,
      }}
    >
      <ChildrenWrapper>
        <BannerMark />
      </ChildrenWrapper>
    </TornBackground>

    <Wrapper>
      <DesktopShareBarWrapper>
        <DesktopShareBar variant="vertical" />
      </DesktopShareBarWrapper>
      <StyledTag color={colors.yellow}>Pride in London Themes</StyledTag>
      <PrideInLockdownSection />
      <ActsOfAllyshipSection />
      <Mark />
      <TornBackground
        BackgroundComponent={() => <FeaturedImage src={rallying} />}
        bottomTear={{
          ripType: 2,
          color: '#fff',
          height: 105,
        }}
        topTear={{
          ripType: 2,
          color: '#fff',
          height: 100,
        }}
      />

      <ForEveryKindSection />
      <Mark />
      <DonateToYourCommunitySection />
      <TornBackground
        BackgroundComponent={() => (
          <FeaturedImage src={different} marginTop="xl" />
        )}
        bottomTear={{
          ripType: 5,
          color: '#fff',
          height: 125,
        }}
        topTear={{
          ripType: 1,
          color: '#fff',
          height: 150,
        }}
      />
      <BeThereForYourCommunitySection />
      <TornBackground
        BackgroundComponent={() => (
          <FeaturedImage src={sunshine} marginTop="xl" />
        )}
        bottomTear={{
          ripType: 2,
          color: '#fff',
          height: 105,
        }}
        topTear={{
          ripType: 4,
          color: '#fff',
          height: 130,
        }}
      />

      <CelebrateYourCommunitySection />
      <TornBackground
        BackgroundComponent={() => <FeaturedImage src={ymuw} marginY="xl" />}
        topTear={{
          ripType: 3,
          color: '#fff',
          height: 145,
        }}
      />
    </Wrapper>
  </>
)

export default YouMeUsWePage
