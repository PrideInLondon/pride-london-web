import React from 'react'
import { Row } from '../../../../components/grid'
import bgDonateLeft from '../../../../theme/assets/images/bg-donate-left.svg'
import bgDonateRight from '../../../../theme/assets/images/bg-donate-right.svg'
import bgMobileDonateRight from '../../../../theme/assets/images/bg-mobile-donate-right.svg'
import DonateButtonsGroup from '../donateSection/donateButtonsGroup'
import {
  DonateSectionsWrapper,
  HeadDonate,
  BackgroundLeft,
  BackgroundRight,
  LayerContent,
} from './styles'

const DonateSection = () => (
  <DonateSectionsWrapper>
    <BackgroundLeft>
      <img src={bgDonateLeft} alt="bg donate" />
    </BackgroundLeft>
    <BackgroundRight>
      <picture>
        <source media="(min-width: 768px)" srcSet={bgDonateRight} />
        <img src={bgMobileDonateRight} alt="Mobile background" />
      </picture>
    </BackgroundRight>
    <LayerContent>
      <Row>
        <HeadDonate>Make a single donation</HeadDonate>
      </Row>
      <Row>
        <DonateButtonsGroup />
      </Row>
    </LayerContent>
  </DonateSectionsWrapper>
)

export default DonateSection
