import styled from 'styled-components'
import { compose, space, layout, SpaceProps, LayoutProps } from 'styled-system'
import { colors } from '../../theme/colors'
import { md, lg, xl_mob } from '../../theme/space'

export const Wrapper = styled.div<LayoutProps & SpaceProps>`
  background-color: ${colors.lightGrey};
  padding: ${xl_mob}px ${lg}px;

  ${compose(layout, space)}
`

export const SocialBar = styled.div`
  display: flex;
  font-size: 40px;

  > *:not(:last-child) {
    margin-right: ${md}px;
  }
`

export const StyledLink = styled.a`
  text-decoration: none;
`
