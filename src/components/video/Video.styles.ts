import styled from 'styled-components'
import { compose, layout, space, SpaceProps } from 'styled-system'
import { colors } from '../../theme/colors'
import { fontSizes } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'
import { lg } from '../../theme/space'

export const StyledFigure = styled.figure`
  margin: 0 0 2em 0;
  position: relative;
  width: 100%;

  ${compose(layout, space)}
`

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
`

export const StylediFrame = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const VideoImageWrapper = styled.div`
  cursor: pointer;
`

export const StyledVideoImage = styled.img`
  width: 100%;
`

export const StyledButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: ${lg}px;
  left: ${lg}px;

  ${mediaQueries.md} {
    bottom: 0;
  }
`

export const StyledFigCaption = styled.figcaption<SpaceProps>`
  font-size: ${fontSizes.body_sm};
  font-weight: bold;
  text-align: right;
  float: right;
  color: ${colors.indigo};
  width: 60%;

  ${mediaQueries.md} {
    width: 80%;
  }

  ${space}
`
