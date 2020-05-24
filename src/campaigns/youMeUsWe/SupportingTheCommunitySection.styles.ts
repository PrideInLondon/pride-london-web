import styled from 'styled-components'
import { H1 } from '../../components/typography'
import { lg } from '../../theme/space'
import { mediaQueries } from '../../theme/mediaQueries'

export const Heading = styled(H1).attrs({
  as: 'h2',
})`
  ${mediaQueries.md} {
    margin-top: ${lg}px;
  }
`

export const Content = styled.div`
  max-width: 620px;
`
