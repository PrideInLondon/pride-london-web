import React from 'react'
import PropTypes from 'prop-types'
import { StyledList } from './styles'

const List = ({ children }) => {
  return <StyledList>{children}</StyledList>
}

List.propTypes = {
  children: PropTypes.node.isRequired,
}

export default List
