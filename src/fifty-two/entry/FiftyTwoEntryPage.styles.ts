import styled from 'styled-components'
import { compose, space, layout, SpaceProps, LayoutProps } from 'styled-system'
import { hideVisually } from 'polished'
import { H1 } from '../../components/typography'
import { mediaQueries } from '../../theme/mediaQueries'

export const Heading = styled(H1)`
  ${hideVisually()}
`

export const Wrapper = styled.div<SpaceProps>`
  display: block;

  ${mediaQueries.md} {
    display: flex;
  }

  ${compose(space)}
`

export const Column = styled.div<SpaceProps & LayoutProps>`
  ${compose(space, layout)}
`
