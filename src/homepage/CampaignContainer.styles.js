import styled from 'styled-components'
import Link from 'gatsby-link' // lgtm [js/unused-local-variable]
import { Button } from '../components/button'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import CampaignContainerBg from '../campaigns/proudAndLoud/Calum_Hailey_16-9.jpg'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-bottom: 64px;

  ${mediaQueries.md} {
    flex-direction: row;
    margin-top: 100px;
  }
`

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 15px;

  ${mediaQueries.md} {
    font-size: 18px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0%;
    max-width: calc(100% - 75%);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: calc(250px - 19%);
  }

  @media screen and (min-width: 964px) {
    position: absolute;
    bottom: unset;
    left: 0;
    right: 0;
    top: 500px;
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
`

export const BackgroundImage = styled.div`
  background-image: url(${CampaignContainerBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 200px;

  ${mediaQueries.sm} {
    height: 250px;
  }
  @media screen and (min-width: 425px) {
    margin-bottom: 20px;
  }
  ${mediaQueries.md} {
    height: 615px;
    margin-bottom: 0;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${colors.white};
  text-align: left;
  border-radius: 7px;

  width: 100%;
  padding: 0;
  margin-top: 10px;

  ${mediaQueries.md} {
    margin: 32px;
    margin-left: -128px;
    width: 50%;
    padding: 58px;
  }
`

export const StyledHeader = styled.h2`
  margin: 0;
  font-size: 2.25rem;
  font-weight: 800;
  line-height: 1.17;
  letter-spacing: normal;

  ${mediaQueries.md} {
    font-size: 3.5rem;
    line-height: 1.21;
  }
`

export const StyledDescription = styled.p`
  margin-top: 15px;
  margin-bottom: 40px;
  font-size: 18px;

  color: ${colors.black};

  ${mediaQueries.md} {
    color: ${colors.indigo};
    font-size: 22px;
  }
`

export const StyledLink = styled(Link)`
  width: max-content;
  font-size: 16px;

  ${mediaQueries.md} {
    font-size: 18px;
  }
`
