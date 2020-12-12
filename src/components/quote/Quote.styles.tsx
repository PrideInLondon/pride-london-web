import styled from 'styled-components'
import { fontSizes } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'

export const StyledBlockquote = styled.blockquote`
  text-align: center;
  ${mediaQueries.sm} {
    font-size: ${fontSizes.h4_mobile};
  }
`
