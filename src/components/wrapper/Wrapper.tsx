import styled from 'styled-components'
import {
  compose,
  space,
  layout,
  typography,
  flexbox,
  position,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  FlexboxProps,
  PositionProps,
} from 'styled-system'

export const Wrapper = styled.div<
  SpaceProps & LayoutProps & TypographyProps & FlexboxProps & PositionProps
>`
  ${compose(space, layout, typography, flexbox, position)}
`
