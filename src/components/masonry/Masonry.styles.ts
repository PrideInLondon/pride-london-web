import styled from 'styled-components'
import { space } from 'styled-system'
import { sm } from '../../theme/space'

export const Wrapper = styled.div<{ columns: number }>`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${sm}px;
  grid-template-columns: repeat(${({ columns }) => columns}, minmax(0, 1fr));

  ${space}
`

export const Column = styled.div`
  > * {
    margin: ${sm}px;
  }
`
