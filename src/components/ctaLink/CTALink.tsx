import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import theme from '../../theme/theme'
import { handleUrl } from '../../utils/location-utils'
import { CTALinkProps } from './CTALink.types'

const StyledLink = styled.a`
  border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
  text-decoration: none;
  color: ${theme.colors.black};
  transition: color 0.15s linear;

  & + .cta-link {
    margin-left: 20px;
  }
  &:hover,
  &:focus {
    color: ${theme.colors.eucalyptusGreen};
  }
`

export const CTALink: React.FC<CTALinkProps> = ({ to, children, ...props }) => (
  <StyledLink<'a' | typeof Link>
    {...handleUrl(to)}
    className="cta-link"
    {...props}
  >
    {children}&nbsp;&rsaquo;
  </StyledLink>
)
