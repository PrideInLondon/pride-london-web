import styled from 'styled-components'
import { md } from '../../theme/space'

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
