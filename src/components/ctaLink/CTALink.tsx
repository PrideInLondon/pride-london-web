import React from 'react'
import styled from 'styled-components'
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

const Arrow = () => <>&nbsp;&rsaquo;</>

export const CTALink: React.FC<CTALinkProps> = ({
  to,
  arrow = true,
  children,
  ...props
}) => (
  <StyledLink<any>
    {...(to ? handleUrl(to) : { as: 'span' })}
    className="cta-link"
    {...props}
  >
    {children}
    {arrow && <Arrow />}
  </StyledLink>
)
