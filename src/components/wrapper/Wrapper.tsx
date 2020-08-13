import styled from 'styled-components'
import {
  compose,
  color,
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
  ColorProps,
} from 'styled-system'

export const Wrapper = styled.div<
  SpaceProps &
    LayoutProps &
    TypographyProps &
    FlexboxProps &
    PositionProps &
    ColorProps
>`
  ${compose(space, layout, typography, flexbox, position, color)}
`
