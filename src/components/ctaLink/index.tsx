import React from 'react'
import styled from 'styled-components'

import Link from 'gatsby-link'

import theme from '../../theme/theme'
import { handleUrl } from '../../utilities'

interface CTALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string
}

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
` as React.FC<
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a' | typeof Link }
>

const CTALink: React.FC<CTALinkProps> = ({ to, children, ...props }) => (
  <StyledLink {...handleUrl(to)} className="cta-link" {...props}>
    {children}&nbsp;&rsaquo;
  </StyledLink>
)

export default CTALink
