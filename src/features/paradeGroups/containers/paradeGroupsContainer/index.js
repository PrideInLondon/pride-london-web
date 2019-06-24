import React, {
  Fragment,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react'
import PropTypes from 'prop-types'
import LetterLink from '../../components/letterLink'
import LetterGroup from '../../components/letterGroup'
import ParadeGroup from '../../components/paradeGroup'
import ParadeGroupsFilterContainer from '../paradeGroupsFiltersContainer'
import { paradeGroupFilterPropType } from '../../paradeGroupFilterPropType'
import { paradeGroupCategories } from '../../../../constants'
import { LetterContainer, ScrolledLetters } from './styles'

const lettersArray = '#abcdefghijklmnopqrstuvwxyz'.split('') // => ['a', 'b', ...]
const lettersContainerHeight = 50

const filterGroupByFirstLetter = (groupName, letter) => {
  return groupName.toUpperCase().startsWith(letter.toUpperCase())
}

const isInViewport = (e, { top: t, height: h } = e.getBoundingClientRect()) =>
  t <= innerHeight && t - lettersContainerHeight + h >= 0

const ParadeGroupsContainer = ({ paradeGroups, categories }) => {
  const [selectedFilter, setSelectedFilter] = useState(paradeGroupCategories[0])
  const [groups, setGroups] = useState(paradeGroups)
  const [activeLetter, setActiveLetter] = useState(null)
  const paradeGroupLettersSection = useRef(null)

  const handleScroll = useCallback(() => {
    let _activeLetter = null
    for (const paradeGroupLetterSection of paradeGroupLettersSection.current
      .children) {
      if (isInViewport(paradeGroupLetterSection)) {
        if (paradeGroupLetterSection.id) {
          _activeLetter = paradeGroupLetterSection.id.substr(-1)
          break
        }
      }
    }
    if (_activeLetter !== activeLetter) {
      setActiveLetter(_activeLetter)
    }
  }, [activeLetter])

  const handleFilterClick = useCallback(
    newFilter => {
      setSelectedFilter(newFilter)
      setGroups(
        newFilter === paradeGroupCategories[0] // TODO Reliance on magic array position
          ? paradeGroups
          : paradeGroups.filter(paradeGroup => {
              return (
                paradeGroup.category &&
                paradeGroup.category.includes(newFilter.api)
              )
            })
      )
      handleScroll()
    },
    [paradeGroups, handleScroll]
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

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
    groups.some(group => group.name.charCodeAt(0) < 65)
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
              isActive={activeLetter === letter}
            />
          ))}
        </ScrolledLetters>
      </LetterContainer>
      <div ref={paradeGroupLettersSection}>
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
                      name,
                      websiteUrl,
                      twitterUrl,
                      facebookUrl,
                      instagramUrl,
                    }) => {
                      return (
                        <ParadeGroup
                          key={name}
                          name={name}
                          websiteUrl={websiteUrl}
                          twitterUrl={twitterUrl}
                          facebookUrl={facebookUrl}
                          instagramUrl={instagramUrl}
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
