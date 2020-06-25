import React from 'react'
import {
  Container,
  BackgroundImage,
  TextContainer,
  StyledHeader,
  StyledDescription,
  StyledButton,
} from './CampaignContainer.styles'

const ParadeApplications = () => (
  <Container>
    <BackgroundImage />
    <TextContainer>
      <StyledHeader>FRIDAY 9pm - 2am</StyledHeader>
      <StyledDescription>
        Kick off your Pride weekend with a bang and join our free live stream
        virtual club night, hosted by the talented DIVINA DE CAMPO.
      </StyledDescription>
      <StyledButton
        to="https://vimeo.com/430284359/23d144590d"
        target="_blank"
        id="campaign-you-me-us-we"
      >
        Stream live here
      </StyledButton>
    </TextContainer>
  </Container>
)

export default ParadeApplications
