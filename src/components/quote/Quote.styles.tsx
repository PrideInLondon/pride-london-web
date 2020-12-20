import styled from 'styled-components'
import { compose, layout, space, position } from 'styled-system'
import { H3 } from '../typography'

import { fontSizes } from '../../theme/fonts'
import { mediaQueries } from '../../theme/mediaQueries'

export const StyledBlockquote = styled(H3)`
  text-align: center;
  ${mediaQueries.sm} {
    font-size: ${fontSizes.h4_mobile};
  }
  ${compose(space, layout, position)}
`
