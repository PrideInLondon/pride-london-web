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
      <StyledHeader>Join our #YouMeUsWe campaign!</StyledHeader>
      <StyledDescription>
        This Pride month we're calling on all LGBT+ people to make an act of
        allyship.
      </StyledDescription>
      <StyledButton
        to="https://prideinlondon.org/about-us"
        target="_self"
        id="campaign-you-me-us-we"
      >
        Find out more
      </StyledButton>
    </TextContainer>
  </Container>
)

export default ParadeApplications
