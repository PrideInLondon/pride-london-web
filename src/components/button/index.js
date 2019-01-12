import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'
import { media } from '../../theme/media'

export const Button = props => {
  const StyledButton = styled[props.link ? 'a' : 'button']`
    box-sizing: border-box;
    border: none;
    padding: 12px;
    border-radius: 4px;
    border: none;
    display: inline-block;
    text-align: center;
    color: ${styleProps =>
      styleProps.primary
        ? styleProps.theme.colors.indigo
        : styleProps.theme.colors.eucalyptusGreen};
    background-color: ${styleProps =>
      styleProps.primary
        ? styleProps.theme.colors.eucalyptusGreen
        : styleProps.theme.colors.indigo};
    font-family: ${styleProps => styleProps.theme.fonts.title};
    font-weight: 700;
    font-size: ${styleProps => (styleProps.small ? '0.875rem' : '1.125rem')};
    line-height: 1.388;
    min-width: ${styleProps => (styleProps.wide ? '250px' : '180px')};
    width: ${styleProps => (styleProps.fullmobile ? '100%' : 'auto')};
    cursor: pointer;
    text-decoration: none;
    text-align: center;
    transition: background-color 0.15s linear;

    &:hover {
      background-color: ${styleProps =>
        styleProps.primary
          ? darken(0.1, styleProps.theme.colors.eucalyptusGreen)
          : darken(0.1, styleProps.theme.colors.indigo)};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    ${media.tablet`
      width: auto;
    `};
  `

  return (
    <StyledButton
      className={props.className}
      type={props.link ? null : props.type}
      primary={props.primary}
      onClick={props.onClick}
      disabled={props.disabled}
      href={props.link ? props.to : null}
      small={props.small}
      wide={props.wide}
      fullmobile={props.fullmobile}
      aria-controls={props['aria-controls']}
      aria-expanded={props['aria-expanded']}
    >
      {props.children}
    </StyledButton>
  )
}

Button.propTypes = {
  className: PropTypes.string,
  link: PropTypes.bool,
  type: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  to: PropTypes.string,
  wide: PropTypes.bool,
  fullmobile: PropTypes.bool,
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
  onClick: null,
  'aria-controls': undefined,
  'aria-expanded': undefined,
}

export default Button
