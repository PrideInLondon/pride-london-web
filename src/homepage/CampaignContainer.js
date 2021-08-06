import React from 'react'
import {
  Container,
  BackgroundImage,
  TextContainer,
  StyledHeader,
  // StyledDescription,
  // StyledButton,
} from './CampaignContainer.styles'

const ParadeApplications = () => (
  <Container>
    <BackgroundImage />
    <TextContainer>
      <StyledHeader>
        Pride in London calls for Visibility, Unity and Equality
      </StyledHeader>
      {/* To be replaced once arrangements for pride 2022 are confirmed */}
      {/* <StyledDescription>
        This Pride month we're calling on all LGBT+ people to make an act of
        allyship.
      </StyledDescription> */}
      {/* <StyledButton
        to="https://prideinlondon.org/about-us"
        target="_self"
        id="campaign-you-me-us-we"
      >
        Find out more
      </StyledButton> */}
    </TextContainer>
  </Container>
)

export default ParadeApplications
