import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './Title.styles'

const Title = ({ children, isLight, isCentered, className }) => (
  <StyledTitle className={className} isLight={isLight} isCentered={isCentered}>
    {children}
  </StyledTitle>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
  isLight: PropTypes.bool,
  isCentered: PropTypes.bool,
  className: PropTypes.string,
}

Title.defaultProps = {
  isLight: false,
  isCentered: false,
  className: null,
}

export default Title
