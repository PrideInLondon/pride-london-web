import styled from 'styled-components'
import { SpaceProps } from 'styled-system'
import { colors } from '../../theme/colors'
import { fontSizes } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'

export const StyledBlockquote = styled.blockquote`
  text-align: center;
  ${mediaQueries.sm} {
    font-size: ${fontSizes.h4_mobile};
  }
`
export const StyledFigCaption = styled.figcaption<SpaceProps>`
  font-size: ${fontSizes.body_md};
  text-align: center;
  color: ${colors.indigo};
  ${mediaQueries.sm} {
    font-size: ${fontSizes.body_md_mobile};
  }
`
