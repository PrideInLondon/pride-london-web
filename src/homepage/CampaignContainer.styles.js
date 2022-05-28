import styled from 'styled-components'
import Link from 'gatsby-link' // lgtm [js/unused-local-variable]
import { Button } from '../components/button'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import CampaignContainerBg from '../campaigns/proudAndLoud/ArtistCombo_16-9_new1.jpg'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  margin: 20px;
  margin-bottom: 64px;

  @media screen and (min-width: 1350px) {
    flex-direction: row;
    margin-top: 100px;
  }
`

export const BackgroundImageButton = styled(Button)`
  display: none;
  ${mediaQueries.md} {
    display: block;
    position: absolute;
    bottom: 8%;
    left: calc(50% - 340px);
  }

  @media screen and (min-width: 820px) {
    bottom: 5%;
  }
`

export const StyledButton = styled(Button)`
  width: 100%;
  font-size: 15px;
  ${mediaQueries.md} {
    display: none;
  }
`

export const BackgroundImage = styled.div`
  position: relative;
  background-image: url(${CampaignContainerBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 200px;
  ${mediaQueries.sm} {
    height: 250px;
  }

  ${mediaQueries.md} {
    height: 450px;
    margin-bottom: 0;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 7px;

  text-align: center;
  position: relative;
  margin-top: 10px;

  ${mediaQueries.md} {
    margin: 32px;
    padding-top: 0;
    margin-bottom: 0;
  }

  @media screen and (min-width: 1350px) {
    text-align: left;
    position: absolute;
    right: 20px;
    margin: 0px;
    width: 25%;
    padding: 58px;
  }
`

export const StyledHeader = styled.h2`
  margin: 0;
  font-weight: 800;
  letter-spacing: normal;
  font-size: 0.8rem;
  line-height: 1.21;
  background-color: ${colors.white};
  padding: 5px;
  border-radius: 7px;

  ${mediaQueries.md} {
    font-size: 2rem;
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
