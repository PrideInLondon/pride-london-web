import styled from 'styled-components'
import { space, layout, flexbox, border, compose } from 'styled-system'
import { colors } from '../../theme/colors'
import { BoxProps } from './Box.types'

export const Box = styled.div<BoxProps>`
  ${compose(space, layout, flexbox, border)}
`

Box.defaultProps = {
  px: { default: 'lg', md: 'xl_mob' },
  py: { default: 'lg', md: 'xl_mob' },
  border: `2px solid ${colors.indigo}`,
}
