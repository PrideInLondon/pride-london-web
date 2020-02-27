import styled from 'styled-components'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { CardTitle } from '../components/newsCard'
import { NewsCard as NewsCardHomepage } from './LatestNewsContainer.styles'

export const Background = styled(Link)`
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 250px;
  position: relative;
  text-decoration: none;

  &:hover {
    ${CardTitle} {
      border-bottom-color: ${theme.colors.eucalyptusGreen};
    }
  }
`
export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  ${media.desktop`
    border-radius: 4px;
  `}
`
export const LatestNewsImg = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
`

export const LatestNewsCardContainer = styled.div`
  display: flex;

  ${media.desktop`
    max-width: 620px;
    margin-left: 30px;
    margin-right: 30px;
  `}

  ${media.desktopMax`  
    margin: 0 50px -60px 50px;
  `};
  ${media.tabletMax`  
    margin: 0 20px -60px 20px;
  `};
`

export const NewsCard = styled(NewsCardHomepage)`
  align-self: flex-end;
`
