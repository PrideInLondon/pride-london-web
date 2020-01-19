import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/button'
import { colors } from '../../../../theme/colors'
import Link from '../../../../components/ctaLink'
import paradeApplicationsBg from '../../../../theme/assets/images/parade-applications-bg.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 90px;
`

const BackgroundImage = styled.div`
  background-image: url(${paradeApplicationsBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 615px;
  border-radius: 7px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  text-align: left;
  border-radius: 7px;
  width: 50%;
  padding: 32px;
  margin: 48px 48px 48px -128px;
`

const StyledDescription = styled.p`
  color: ${colors.indigo};
  margin-top: 15px;
  margin-bottom: 40px;
  font-size: 22px;
`

const StyledButton = styled(Button)`
  margin-bottom: 30px;
  margin-right: 64px;
`

const StyledLink = styled(Link)`
  width: max-content;
`

const ParadeApplications = () => (
  <Container>
    <BackgroundImage />
    <TextContainer>
      <h1>Parade 2020 applications are open!</h1>
      <StyledDescription>
        Apply for your group’s spot in this year’s Pride in London Parade
      </StyledDescription>
      <StyledButton to="">Start your Parade application</StyledButton>
      <StyledLink to="">Find out more about applying</StyledLink>
    </TextContainer>
  </Container>
)

export default ParadeApplications
