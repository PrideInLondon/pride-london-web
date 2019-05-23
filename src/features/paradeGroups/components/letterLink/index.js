import React from 'react'
import PropTypes from 'prop-types'
import StyledLetterLink from './styles'

const LetterLink = ({ letter, isDisabled }) => {
  return (
    <StyledLetterLink isDisabled={isDisabled} href={`#parade-group-${letter}`}>
      {letter.toUpperCase()}
    </StyledLetterLink>
  )
}

LetterLink.propTypes = {
  letter: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
}

LetterLink.defaultProps = {
  isDisabled: false,
}

export default LetterLink
