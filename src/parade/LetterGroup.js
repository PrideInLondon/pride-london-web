import React from 'react'
import PropTypes from 'prop-types'

import { Heading, GroupsContainer, Wrapper } from './LetterGroup.styles'

const LetterGroup = ({ children, letter }) => {
  return (
    <Wrapper id={`parade-group-${letter}`}>
      <Heading>
        <h4>{letter.toUpperCase()}</h4>
      </Heading>
      <GroupsContainer>{children}</GroupsContainer>
    </Wrapper>
  )
}

LetterGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  letter: PropTypes.string.isRequired,
}

export default LetterGroup
