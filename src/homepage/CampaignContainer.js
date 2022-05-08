import React from 'react'
import {
  Container,
  BackgroundImage,
  StyledButton,
} from './CampaignContainer.styles'

const ParadeApplications = () => (
  <Container>
    <BackgroundImage />
    <StyledButton
      to="https://www.royalalberthall.com/tickets/events/2022/proud-and-loud/"
      target="_self"
      id="campaign-proud-and-loud"
    >
      Buy tickets
    </StyledButton>
  </Container>
)

export default ParadeApplications
