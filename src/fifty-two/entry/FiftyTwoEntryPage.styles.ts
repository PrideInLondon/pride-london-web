import styled from 'styled-components'
import { compose, space, layout, SpaceProps, LayoutProps } from 'styled-system'

export const Wrapper = styled.div<SpaceProps>`
  display: flex;

  ${compose(space)}
`

export const Column = styled.div<SpaceProps & LayoutProps>`
  ${compose(space, layout)}
`
