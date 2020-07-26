import styled from 'styled-components'
import { compose, space, layout, SpaceProps, LayoutProps } from 'styled-system'
import { hideVisually } from 'polished'
import { H1 } from '../../components/typography'
import { mediaQueries } from '../../theme/mediaQueries'

export const Heading = styled(H1)`
  ${hideVisually()}
`

export const Wrapper = styled.div<SpaceProps>`
  ${space}
`

export const FlexWrapper = styled.div`
  display: block;

  ${mediaQueries.md} {
    display: flex;
  }
`

export const Column = styled.div<SpaceProps & LayoutProps>`
  ${compose(space, layout)}
`
