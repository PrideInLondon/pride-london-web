import styled from 'styled-components'
import { H1 } from '../../components/typography'
import { xl, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const Heading = styled(H1).attrs({ as: 'h2' })`
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
  }
`
