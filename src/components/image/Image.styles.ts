import styled from 'styled-components'
import { compose, layout, space, LayoutProps, SpaceProps } from 'styled-system'

export const StyledFigure = styled.figure<LayoutProps & SpaceProps>`
  margin: 0;

  ${compose(layout, space)}
`
