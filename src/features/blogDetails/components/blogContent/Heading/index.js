import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeading } from './styles'

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading
