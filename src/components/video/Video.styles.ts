import styled from 'styled-components'
import { compose, layout, space, SpaceProps } from 'styled-system'
import Image from 'gatsby-image'
import { colors } from '../../theme/colors'
import { fontSizes } from '../../theme/fonts'

export const StyledFigure = styled.figure`
  margin: 0 0 2em 0;
  position: relative;

  ${compose(layout, space)}
`

export const VideoContainer = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  margin-bottom: 2em;
`

export const StylediFrame = styled.iframe`
  position: absolute;
  height: 100%;
  width: 100%;
`

export const StyledVideoImage = styled(Image)`
  cursor: pointer;
  display: block;
  width: 100%;
`

export const StyledButtonContainer = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0;
  left: 24px;
`

export const StyledFigCaption = styled.figcaption<SpaceProps>`
  font-size: ${fontSizes.body_sm};
  font-weight: bold;
  text-align: right;
  color: ${colors.indigo};

  ${space}
`
