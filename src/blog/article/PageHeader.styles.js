import styled from 'styled-components'
import { GatsbyImage } from "gatsby-plugin-image";
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

export const BackgroundImage = styled(GatsbyImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100% !important;
  width: 100% !important;
  transform: translate(-50%, -50%);
`
