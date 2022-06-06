import styled from 'styled-components'
import Link from 'gatsby-link' // lgtm [js/unused-local-variable]
import { colors } from '../theme/colors'
import { mediaQueries } from '../theme/mediaQueries'
import CampaignContainerBg from '../campaigns/allOurPride/PiL_Twitter_Banner.png'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-bottom: 0;

  @media screen and (min-width: 1350px) {
    flex-direction: row;
  }
`

export const BackgroundImage = styled.div`
  position: relative;
  background-image: url(${CampaignContainerBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  width: 100%;
  height: 100%;
  max-height: 600px;
  min-height: 200px;
  ${mediaQueries.md} {
    margin-bottom: 0;
    min-height: 300px;
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
