import React from 'react'
import PropTypes from 'prop-types'
import StyledLetterLink from './styles'

const LetterLink = ({ letter, isDisabled, isActive }) => {
  const letterAttributes = isDisabled
    ? { isDisabled }
    : { href: `#parade-group-${letter}`, isDisabled }
  return (
    <StyledLetterLink isActive={isActive} {...letterAttributes}>
      {letter.toUpperCase()}
    </StyledLetterLink>
  )
}

LetterLink.propTypes = {
  letter: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  isActive: PropTypes.bool,
}

LetterLink.defaultProps = {
  isDisabled: false,
  isActive: false,
}

export default LetterLink
