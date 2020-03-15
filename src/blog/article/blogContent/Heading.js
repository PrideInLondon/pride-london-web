import React from 'react'
import PropTypes from 'prop-types'
import { StyledHeading } from './Heading.styles'

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Heading
