import React, { Fragment, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import LetterLink from '../../components/letterLink'
import LetterGroup from '../../components/letterGroup'
import ParadeGroup from '../../components/paradeGroup'
import ParadeGroupsFilterContainer from '../paradeGroupsFiltersContainer'
import { paradeGroupFilterPropType } from '../../paradeGroupFilterPropType'
import { paradeGroupCategories } from '../../../../constants'
import { LetterContainer, ScrolledLetters } from './styles'

const lettersArray = '#abcdefghijklmnopqrstuvwxyz'.split('') // => ['a', 'b', ...]

const filterGroupByFirstLetter = (groupName, letter) => {
  return groupName.toUpperCase().startsWith(letter.toUpperCase())
}

const ParadeGroupsContainer = ({ paradeGroups, categories }) => {
  const [selectedFilter, setSelectedFilter] = useState(paradeGroupCategories[0])
  const [groups, setGroups] = useState(paradeGroups)

  const handleFilterClick = useCallback(
    group => {
      setSelectedFilter(group)
      setGroups(
        group === paradeGroupCategories[0]
          ? paradeGroups
          : paradeGroups.filter(
              paradeGroup =>
                paradeGroup.category &&
                paradeGroup.category.includes(group.title)
            )
      )
    },
    [paradeGroups]
  )

  const availableLetters = lettersArray.reduce((acc, letter) => {
    if (
      // Checks the parade groups to see
      // if any of them start with the letter.
      // If they do, add it to available letters.
      groups.some(group => filterGroupByFirstLetter(group.name, letter))
    ) {
      return [...acc, letter]
    }
    return acc
  }, [])

  // This assumes there will be groups that
  // start with something other than a letter.
  if (
    !availableLetters.includes('#') &&
    groups.some(group =>
      lettersArray.some(letter => group.name.startsWith(letter))
    )
  ) {
    availableLetters.unshift('#')
  }

  return (
    <>
      <ParadeGroupsFilterContainer
        categories={categories}
        selectedFilter={selectedFilter}
        handleFilterClick={handleFilterClick}
      />
      <LetterContainer>
        <ScrolledLetters>
          {lettersArray.map(letter => (
            <LetterLink
              key={letter}
              letter={letter}
              isDisabled={!availableLetters.includes(letter)}
            />
          ))}
        </ScrolledLetters>
      </LetterContainer>
      <div>
        {availableLetters.map(availableLetter => {
          return (
            <Fragment key={availableLetter}>
              <LetterGroup letter={availableLetter}>
                {groups
                  .filter(group => {
                    if (availableLetter === '#') {
                      // get groups starting with non-letter characters
                      return group.name.charCodeAt(0) < 65
                    }
                    return filterGroupByFirstLetter(group.name, availableLetter)
                  })
                  .map(
                    ({
                      id,
                      name,
                      facebookUrl,
                      instagramUrl,
                      twitterUrl,
                      websiteUrl,
                    }) => {
                      return (
                        <ParadeGroup
                          key={id}
                          name={name}
                          facebookUrl={facebookUrl}
                          instagramUrl={instagramUrl}
                          twitterUrl={twitterUrl}
                          websiteUrl={websiteUrl}
                        />
                      )
                    }
                  )}
              </LetterGroup>
            </Fragment>
          )
        })}
      </div>
    </>
  )
}

ParadeGroupsContainer.propTypes = {
  paradeGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  categories: PropTypes.arrayOf(paradeGroupFilterPropType).isRequired,
}

export default ParadeGroupsContainer
