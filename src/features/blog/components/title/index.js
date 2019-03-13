import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from '../../../../theme/theme'

const StyledTitle = styled.h2`
  font-weight: 700;
  color: ${props =>
    props.isLight ? theme.colors.lightGrey : theme.colors.darkBlue};
  margin: 0.25em;
`

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
