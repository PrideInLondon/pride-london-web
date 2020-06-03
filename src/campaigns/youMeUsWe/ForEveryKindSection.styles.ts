import styled from 'styled-components'
import { H1, P } from '../../components/typography'
import { xl, xl_mob, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const Heading = styled(H1).attrs({
  as: 'h2',
})`
  text-align: center;
  margin-bottom: 0 !important;
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
  }
`

export const Content = styled(P)`
  margin-top: ${xl_mob}px !important;

  ${mediaQueries.md} {
    margin-top: ${xl}px !important;
  }
`
