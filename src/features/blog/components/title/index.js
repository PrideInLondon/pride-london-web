import React from 'react'
import PropTypes from 'prop-types'
import { StyledTitle } from './styles'

const Title = ({ children, isLight }) => (
  <StyledTitle isLight={isLight}>{children}</StyledTitle>
)

Title.propTypes = {
  children: PropTypes.string.isRequired,
  isLight: PropTypes.bool,
}

Title.defaultProps = {
  isLight: false,
}

export default Title
