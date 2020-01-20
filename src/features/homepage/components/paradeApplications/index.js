import React from 'react'
import styled from 'styled-components'
import Button from '../../../../components/button'
import { colors } from '../../../../theme/colors'
import { mediaQueries } from '../../../../theme/mediaQueries'
import Link from '../../../../components/ctaLink'
import paradeApplicationsBg from '../../../../theme/assets/images/parade-applications-bg.jpg'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  ${mediaQueries.md} {
    flex-direction: row;
    margin-left: 90px;
    margin-top: 100px;
  }
`

const BackgroundImage = styled.div`
  background-image: url(${paradeApplicationsBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;

  height: 300px;

  ${mediaQueries.md} {
    height: 615px;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${colors.white};
  text-align: left;
  border-radius: 7px;

  width: 100%;
  padding: 32px 0;

  ${mediaQueries.md} {
    margin: 48px 48px 48px -128px;
    width: 50%;
    padding: 32px;
  }
`

const StyledHeader = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 4rem;
  letter-spacing: normal;

  ${mediaQueries.md} {
    font-size: 3.5rem;
  }
`

const StyledDescription = styled.p`
  margin-top: 15px;
  margin-bottom: 40px;
  font-size: 22px;

  color: ${colors.black};

  ${mediaQueries.md} {
    color: ${colors.indigo};
  }
`

const StyledButton = styled(Button)`
  margin-bottom: 30px;
  margin-right: 128px;

  ${mediaQueries.md} {
    margin-right: 64px;
  }
`

const StyledLink = styled(Link)`
  width: max-content;
`

const ParadeApplications = () => (
  <Container>
    <BackgroundImage />
    <TextContainer>
      <StyledHeader>Parade 2020 applications are open!</StyledHeader>
      <StyledDescription>
        Apply for your group’s spot in this year’s Pride in London Parade
      </StyledDescription>
      <StyledButton
        to="https://apply.prideinlondon.org/"
        target="_self"
        id="parade-apps-apply"
      >
        Start your Parade application
      </StyledButton>
      <StyledLink
        to="https://prideinlondon.org/parade/take-part/"
        id="parade-apps-find-out-more"
      >
        Find out more about applying
      </StyledLink>
    </TextContainer>
  </Container>
)

export default ParadeApplications
