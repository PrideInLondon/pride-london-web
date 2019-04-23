import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../../theme/theme'
import { externalUrl, contactUrl } from '../../utilities'

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

const CTALink = ({ to, children }) => (
  <StyledLink
    {...to && !externalUrl(to) && !contactUrl(to) && { to: to, as: Link }}
    {...to && (externalUrl(to) || contactUrl(to)) && { href: to }}
    {...to &&
      externalUrl(to) && {
        rel: 'noopener noreferrer',
        target: '_blank',
      }}
    className="cta-link"
  >
    {children}&nbsp;&rsaquo;
  </StyledLink>
)

CTALink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default CTALink
