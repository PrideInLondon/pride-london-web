import styled from 'styled-components'
import {
  compose,
  space,
  flexbox,
  SpaceProps,
  FlexboxProps,
} from 'styled-system'

export const Wrapper = styled.div<SpaceProps>`
  display: flex;

  ${space}
`

export const Column = styled.div<FlexboxProps & SpaceProps>`
  ${compose(flexbox, space)}
`
