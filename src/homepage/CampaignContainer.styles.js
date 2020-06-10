import styled from 'styled-components'
import Link from 'gatsby-link' // lgtm [js/unused-local-variable]
import { Button } from '../components/button'
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import CampaignContainerBg from '../campaigns/youMeUsWe/assets/ymuw-meta.jpg'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-bottom: 64px;

  ${mediaQueries.md} {
    flex-direction: row;
    margin-left: 90px;
    margin-top: 100px;
  }
`

export const BackgroundImage = styled.div`
  background-image: url(${CampaignContainerBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;

  height: 300px;

  ${mediaQueries.md} {
    height: 615px;
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

export const StyledButton = styled(Button)`
  width: 90%;
  margin-bottom: 30px;
  font-size: 15px;

  ${mediaQueries.md} {
    margin-right: 64px;
    font-size: 18px;
  }
`

export const StyledLink = styled(Link)`
  width: max-content;
  font-size: 16px;

  ${mediaQueries.md} {
    font-size: 18px;
  }
`
