import styled from 'styled-components'
import { layout, LayoutProps, space, SpaceProps } from 'styled-system'
import { sm } from '../../theme/space'

export const Grid = styled.div<LayoutProps & SpaceProps>`
  display: flex;
  flex-wrap: wrap;

  > * {
    padding: ${sm}px;

    ${layout}
  }

  ${space}
`
