import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styles'

const Title = ({ children, isLight, isCentered }) => (
  <StyledTitle isLight={isLight} isCentered={isCentered}>
    {children}
  </StyledTitle>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
  isLight: PropTypes.bool,
  isCentered: PropTypes.bool,
}

Title.defaultProps = {
  isLight: false,
  isCentered: false,
}

export default Title
