import styled from 'styled-components'
import { compose, space, layout, SpaceProps, LayoutProps } from 'styled-system'
import { colors } from '../../theme/colors'
import { md } from '../../theme/space'

export const Wrapper = styled.div<LayoutProps & SpaceProps>`
  ${compose(layout, space)}
`

export const Content = styled.div<SpaceProps>`
  background-color: ${colors.lightGrey};

  ${space}
`

export const ShareBar = styled.div`
  display: flex;
  font-size: 40px;

  > *:not(:last-child) {
    margin-right: ${md}px;
  }
`

export const StyledLink = styled.a`
  text-decoration: none;
`
