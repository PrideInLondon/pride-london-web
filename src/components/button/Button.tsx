import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { externalUrl, contactUrl, handleSlug } from '../../utilities/'
import { StyledButton } from './Button.styles'

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

export const Button: React.FC = props => {
  const {
    className,
    type,
    primary,
    onClick,
    disabled,
    small,
    wide,
    flexwidth,
    fullmobile,
    'aria-controls': ariaControls,
    'aria-expanded': ariaExpanded,
    white,
    children,
    to,
  } = props
  return (
    <StyledButton
      className={className}
      type={type}
      primary={primary}
      onClick={onClick}
      disabled={disabled}
      small={small}
      wide={wide}
      flexwidth={flexwidth}
      fullmobile={fullmobile}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      white={white}
      {...(to &&
        !externalUrl(to) &&
        !contactUrl(to) && { to: handleSlug(to), as: FilteredLink })}
      {...(to &&
        (externalUrl(to) || contactUrl(to)) && {
          href: to,
          as: 'a',
          target: '_blank',
        })}
      {...(to &&
        externalUrl(to) && {
          rel: 'noopener noreferrer',
        })}
    >
      {children}
    </StyledButton>
  )
}

// Button.defaultProps = {
//   className: '',
//   link: false,
//   type: 'button',
//   primary: false,
//   children: 'Button',
//   disabled: false,
//   small: false,
//   to: null,
//   wide: true,
//   fullmobile: false,
//   white: false,
//   onClick: null,
//   flexwidth: false,
//   'aria-controls': undefined,
//   'aria-expanded': undefined,
// }
