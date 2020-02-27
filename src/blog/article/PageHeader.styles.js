import styled from 'styled-components'
import Img from 'gatsby-image/withIEPolyfill'
import { media } from '../../theme/media'

export const Background = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 240px;
  overflow: hidden;

  ${media.desktop`
    height: 480px;
  `};
`

export const BackgroundImage = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100% !important;
  width: 100% !important;
  transform: translate(-50%, -50%);
`
