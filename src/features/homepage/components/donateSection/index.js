import React from 'react'
import Button from '../../../../components/button'
import { Row } from '../../../../components/grid'
import bgDonateLeft from '../../../../theme/assets/images/bg-donate-left.svg'
import bgDonateRight from '../../../../theme/assets/images/bg-donate-right.svg'
import bgMobileDonateRight from '../../../../theme/assets/images/bg-mobile-donate-right.svg'
import {
  DonateSectionsWrapper,
  HeadDonate,
  ButtonsContainer,
  ButtonsGroup,
  ButtonSingle,
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
        <ButtonsContainer>
          <ButtonsGroup>
            <Button
              link
              to="https://donate.prideinlondon.org/?amount=5"
              flexwidth
              primary
            >
              {' '}
              £5{' '}
            </Button>
            <Button
              link
              to="https://donate.prideinlondon.org/?amount=10"
              flexwidth
              primary
            >
              {' '}
              £10{' '}
            </Button>
            <Button
              link
              to="https://donate.prideinlondon.org/?amount=20"
              flexwidth
              primary
            >
              {' '}
              £20{' '}
            </Button>
          </ButtonsGroup>
          <span> OR </span>
          <ButtonSingle>
            <Button link to="https://donate.prideinlondon.org" small fullmobile>
              Choose your own amount{' '}
            </Button>
          </ButtonSingle>
        </ButtonsContainer>
      </Row>
    </LayerContent>
  </DonateSectionsWrapper>
)

export default DonateSection
