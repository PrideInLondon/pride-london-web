import styled from 'styled-components'
import { space } from 'styled-system'
import { sm } from '../../theme/space'

export const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${sm}px;

  ${space}
`

export const Column = styled.div`
  > * {
    margin: ${sm}px;
  }
`
