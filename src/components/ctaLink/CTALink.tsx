import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { color } from 'styled-system'
import { colors } from '../../theme/colors'
import { handleUrl } from '../../utils/location-utils'
import { CTALinkProps } from './CTALink.types'

const StyledLink = styled.a<{ color?: string }>`
  border-bottom: 2px solid ${colors.eucalyptusGreen};
  text-decoration: none;
  transition: color 0.15s linear;

  & + .cta-link {
    margin-left: 20px;
  }
  &:hover,
  &:focus {
    color: ${colors.eucalyptusGreen};
  }

  ${color}
`
StyledLink.defaultProps = {
  color: colors.black,
}

export const CTALink: React.FC<CTALinkProps> = ({ to, children, ...props }) => (
  <StyledLink<'a' | typeof Link>
    {...handleUrl(to)}
    className="cta-link"
    {...props}
  >
    {children}&nbsp;&rsaquo;
  </StyledLink>
)
