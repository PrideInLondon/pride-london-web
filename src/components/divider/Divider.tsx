import styled from 'styled-components'
import { SpaceProps, LayoutProps, compose, space, layout } from 'styled-system'
import { colors } from '../../theme/colors'

export const Divider = styled.hr<SpaceProps & LayoutProps>`
  color: ${colors.mediumGrey};
  height: 1px;

  ${compose(space, layout)}
`
