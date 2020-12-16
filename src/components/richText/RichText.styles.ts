import styled from 'styled-components'
import { compose, layout, space } from 'styled-system'
import { colors } from '../../theme/colors'
import { Navigate } from '../navigate'

export const Wrapper = styled.div`
  ${compose(layout, space)}
`

export const Hyperlink = styled(Navigate)`
  font-weight: 500;
  color: ${colors.indigo};
`
