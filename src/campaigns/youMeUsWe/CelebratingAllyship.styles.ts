import styled from 'styled-components'
import { H1 } from '../../components/typography'
import { lg } from '../../theme/space'

export const Heading = styled(H1)`
  margin-top: ${lg}px;
  text-transform: uppercase;
  max-width: 840px;
  text-align: center;
`

export const Content = styled.div`
  max-width: 620px;
`
