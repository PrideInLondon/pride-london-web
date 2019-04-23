import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { darken } from 'polished'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import { externalUrl, contactUrl } from '../../utilities/'

const StyledButton = styled.button`
  box-sizing: border-box;
  padding: 12px 35px;
  border-radius: 4px;
  border: ${props =>
    props.primary ? 'none' : `2px solid ${theme.colors.white}`};
  display: inline-block;
  text-align: center;
  color: ${props => (props.primary ? theme.colors.indigo : theme.colors.white)};
  background-color: ${props =>
    props.white
      ? theme.colors.white
      : props.primary
      ? theme.colors.eucalyptusGreen
      : theme.colors.indigo};
  font-family: ${theme.fonts.title};
  font-weight: 700;
  font-size: ${props => (props.small ? '0.875rem' : '1.125rem')};
  line-height: 1.388;
  min-width: ${props => {
    return props.wide ? (!props.flexwidth ? '250px' : 'unset') : '180px'
  }};
  width: ${props => (props.fullmobile ? '100%' : 'auto')};
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  transition: background-color 0.15s linear;

  &:hover {
    background-color: ${props =>
      props.white
        ? darken(0.1, theme.colors.white)
        : props.primary
        ? darken(0.1, theme.colors.eucalyptusGreen)
        : darken(0.1, theme.colors.indigo)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${media.tablet`
      width: auto;
  `};
`
// filter props off gatsby link to prevent styled component errors
const FilteredLink = ({ className, to, children }) => (
  <Link className={className} to={to}>
    {children}
  </Link>
)

FilteredLink.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string.isRequired,
  children: PropTypes.node,
}

FilteredLink.defaultProps = {
  className: null,
  children: null,
}

export const Button = props => {
  return (
    <StyledButton
      className={props.className}
      type={props.type}
      primary={props.primary}
      onClick={props.onClick}
      disabled={props.disabled}
      small={props.small}
      wide={props.wide}
      flexwidth={props.flexwidth}
      fullmobile={props.fullmobile}
      aria-controls={props['aria-controls']}
      aria-expanded={props['aria-expanded']}
      white={props.white}
      {...props.to &&
        !externalUrl(props.to) && { to: props.to, as: FilteredLink }}
      {...props.to &&
        (externalUrl(props.to) || contactUrl(props.to)) && {
          href: props.to,
          as: 'a',
        }}
      {...props.to && !externalUrl(props.to) && { to: props.to }}
      {...props.to &&
        externalUrl(props.to) && {
          rel: 'noopener noreferrer',
          target: '_blank',
        }}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  to: PropTypes.string,
  wide: PropTypes.bool,
  flexwidth: PropTypes.bool,
  fullmobile: PropTypes.bool,
  white: PropTypes.bool,
  'aria-controls': PropTypes.string,
  'aria-expanded': PropTypes.bool,
}

Button.defaultProps = {
  className: '',
  link: false,
  type: 'button',
  primary: false,
  children: 'Button',
  disabled: false,
  small: false,
  to: null,
  wide: true,
  fullmobile: false,
  white: false,
  onClick: null,
  flexwidth: false,
  'aria-controls': undefined,
  'aria-expanded': undefined,
}

export default Button
