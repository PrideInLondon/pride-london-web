import styled from 'styled-components'
import { layout, LayoutProps } from 'styled-system'
import { sm } from '../../theme/space'

export const Grid = styled.div<LayoutProps>`
  display: flex;
  flex-wrap: wrap;

  > * {
    padding: ${sm}px;

    ${layout}
  }
`
