import React from 'react'
import {
  Container,
  BackgroundImage,
  StyledButton,
  TextContainer,
  StyledHeader,
  BackgroundImageButton,
} from './CampaignContainer.styles'

const buyTicketsProps = {
  to: 'https://www.royalalberthall.com/tickets/events/2022/proud-and-loud/',
  target: '_self',
  id: 'campaign-proud-and-loud',
  children: 'Buy tickets',
}

const ParadeApplications = () => (
  <Container>
    <BackgroundImage>
      <BackgroundImageButton {...buyTicketsProps} />
    </BackgroundImage>
    <TextContainer>
      <StyledHeader>
        A special anniversary concert celebrating 50 years of Pride in the UK
      </StyledHeader>
    </TextContainer>
    <StyledButton {...buyTicketsProps} />
  </Container>
)

export default ParadeApplications
