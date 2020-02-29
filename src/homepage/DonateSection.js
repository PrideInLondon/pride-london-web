import React from 'react'
import { Row } from '../components/grid'
import donateSectionLeft from './donateSectionLeft.svg'
import donateSectionRight from './donateSectionRight.svg'
import donateSectionRightMobile from './donateSectionRightMobile.svg'
import DonateButtonsGroup from './DonateButtonsGroup'
import {
  DonateSectionsWrapper,
  HeadDonate,
  BackgroundLeft,
  BackgroundRight,
  LayerContent,
} from './DonateSection.styles'

const DonateSection = () => (
  <DonateSectionsWrapper>
    <BackgroundLeft>
      <img src={donateSectionLeft} alt="bg donate" />
    </BackgroundLeft>
    <BackgroundRight>
      <picture>
        <source media="(min-width: 768px)" srcSet={donateSectionRight} />
        <img src={donateSectionRightMobile} alt="Mobile background" />
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
