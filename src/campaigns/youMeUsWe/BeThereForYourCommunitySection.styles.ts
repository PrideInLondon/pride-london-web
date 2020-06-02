import styled from 'styled-components'
import { H1 } from '../../components/typography'
import { GridList, GridItem } from '../../components/gridList'
import { xl, xxl } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const Heading = styled(H1).attrs({ as: 'h2' })`
  margin-top: ${xl}px;

  ${mediaQueries.md} {
    margin-top: ${xxl}px;
  }
`

export const Grid = styled(GridList)`
  margin-top: ${xl}px;
`

export const Item = styled(GridItem)`
  text-align: left;
  font-size: 2.4rem;

  ${mediaQueries.md} {
    font-size: 1.8rem;
  }

  ${mediaQueries.xl} {
    font-size: 2.3rem;
  }
`
