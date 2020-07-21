import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { colors } from '../theme/colors'

export const ButtonWrapper = styled.div.attrs({ paddingY: 'xxl' })<SpaceProps>`
  text-align: center;
  background-color: ${colors.indigo};

  ${space}
`
