import styled from 'styled-components'
import {
  compose,
  color,
  space,
  layout,
  typography,
  flexbox,
  position,
} from 'styled-system'
import { WrapperProps } from './Wrapper.types'

export const Wrapper = styled.div<WrapperProps>`
  ${compose(space, layout, typography, flexbox, position, color)}
`
