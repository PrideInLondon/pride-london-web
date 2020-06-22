import styled from 'styled-components'
import { SpaceProps, space } from 'styled-system'
import { colors } from '../../theme/colors'

export const Divider = styled.hr<SpaceProps>`
  color: ${colors.mediumGrey};
  height: 1px;

  ${space}
`
