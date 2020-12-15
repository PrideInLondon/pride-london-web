import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import Image from 'gatsby-image'
import { fontSizes } from '../../theme/fonts'
import { colors } from '../../theme/colors'
import { mediaQueries } from '../../theme/mediaQueries'

export const StyledImageElement = styled(Image)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100%;
  min-width: 100%;
  padding: 10px;
`

export const ImageOverflow = styled.div`
  overflow: hidden;
  position: relative;
  ${mediaQueries.md} {
    padding-top: 68%;
  }
`

export const ImageWrapper = styled.div`
  transition: transform 0.15s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

export const StyledImageCaption = styled.figcaption<SpaceProps>`
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
