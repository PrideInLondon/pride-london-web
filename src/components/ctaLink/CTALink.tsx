import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/theme'
import { handleUrl } from '../../utilities'

interface CTALinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /**
   * URL to navigate to
   */
  to: string
  as?: any
}

const StyledLink = styled.a<CTALinkProps>`
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

export const CTALink: React.FC<CTALinkProps> = ({ to, children, ...props }) => {
  const linkProps = handleUrl(to)
  return (
    <StyledLink {...linkProps} className="cta-link" {...props}>
      {children}&nbsp;&rsaquo;
    </StyledLink>
  )
}
