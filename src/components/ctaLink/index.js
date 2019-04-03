import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import theme from '../../theme/theme'

const linkStyles = css`
  border-bottom: 2px solid ${theme.colors.eucalyptusGreen};
  text-decoration: none;
  color: ${theme.colors.black};
  transition: border-color 0.15s linear;

  &:after {
    content: '\00a0›';
  }

  & + .cta-link {
    margin-left: 20px;
  }

  &:hover,
  &:focus {
    border-color: transparent;
  }
`
const StyledLink = styled(Link)`
  ${linkStyles}
`

const StyledExternalLink = styled.a`
  ${linkStyles}
`

const CTALink = ({ to, children, external, contact }) =>
  external ? (
    <StyledExternalLink
      href={to}
      className="cta-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </StyledExternalLink>
  ) : contact ? (
    <StyledExternalLink href={to} className="cta-link">
      {children}
    </StyledExternalLink>
  ) : (
    <StyledLink to={to} className="cta-link">
      {children}
    </StyledLink>
  )

CTALink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  external: PropTypes.bool,
  contact: PropTypes.bool,
}

CTALink.defaultProps = {
  external: false,
  contact: false,
}

export default CTALink
