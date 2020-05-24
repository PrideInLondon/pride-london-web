import styled from 'styled-components'
import {
  space,
  layout,
  flexbox,
  border,
  compose,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
} from 'styled-system'
import { colors } from '../../theme/colors'

export const Box = styled.div<
  SpaceProps & LayoutProps & FlexboxProps & BorderProps
>`
  ${compose(space, layout, flexbox, border)}
`

Box.defaultProps = {
  px: { default: 'lg', md: 'xl_mob' },
  py: { default: 'lg', md: 'xl_mob' },
  border: `2px solid ${colors.indigo}`,
}
