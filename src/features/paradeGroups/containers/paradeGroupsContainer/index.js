import React from 'react'
import PropTypes from 'prop-types'
import LetterLink from '../../components/letterLink'
import { LetterContainer } from './styles'

const lettersArray = '#abcdefghijklmnopqrstuvwxwyz'.split('')

const ParadeGroupsContainer = props => {
  const { paradeGroups } = props

  return (
    <>
      <LetterContainer>
        {lettersArray.map(letter => (
          <LetterLink key={letter} letter={letter} />
        ))}
      </LetterContainer>
      {paradeGroups.map(group => (
        <p key={group.name}>{group.name}</p>
      ))}
    </>
  )
}

ParadeGroupsContainer.propTypes = {
  paradeGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ParadeGroupsContainer
