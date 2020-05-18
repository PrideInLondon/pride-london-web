import styled from 'styled-components'
import { colors } from '../../theme/colors'

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 2em;

  iframe {
    position: absolute;
    height: 100%;
    width: 100%;
  }
`

export const StyledFigure = styled.figure`
  margin: 0 0 2em 0;
  cursor: pointer;
  position: relative;

  img {
    display: block;
    width: 100%;
  }

  figcaption {
    padding: 1em;
    text-align: right;
    font-family: Roboto;
    font-size: 14px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: ${colors.indigo};
  }
`
export const PlaceholderButton = styled.button`
  height: 160px;
  width: 160px;
  position: absolute;
  bottom: 0;
  left: 24px;
`
