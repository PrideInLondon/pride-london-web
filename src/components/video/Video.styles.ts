import styled from 'styled-components'
import Image from 'gatsby-image'
import { colors } from '../../theme/colors'

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 2em;
`
export const StyledVideoImage = styled(Image)`
  cursor: pointer;
  display: block;
  width: 100%;
`

export const StylediFrame = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const StyledFigure = styled.figure`
  margin: 0 0 2em 0;
  position: relative;
`
export const StyledFigCaption = styled.figcaption`
  text-align: right;
  font-family: Roboto;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: ${colors.indigo};
`
