import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import LetterLink from '../../components/letterLink'
import LetterGroup from '../../components/letterGroup'
import { LetterContainer, ScrollingContainer } from './styles'
import ParadeGroup from '../../components/paradeGroup'

const lettersArray = 'abcdefghijklmnopqrstuvwxyz'.split('') // => ['a', 'b', ...]

const filterGroupByFirstLetter = (groupName, letter) => {
  return (
    groupName.startsWith(letter) || groupName.startsWith(letter.toUpperCase())
  )
}

const ParadeGroupsContainer = ({ paradeGroups }) => {
  const availableLetters = lettersArray.reduce((acc, letter) => {
    if (
      // Checks the parade groups to see
      // if any of them start with the letter.
      // If they do, add it to available letters.
      paradeGroups.some(group => filterGroupByFirstLetter(group.name, letter))
    ) {
      return [...acc, letter]
    }
    return acc
  }, [])

  // This assumes there will be groups that
  // start with something other than a letter.
  // Might need to be changed to be conditional
  // based on groups
  availableLetters.unshift('#')

  return (
    <>
      <ScrollingContainer>
        <LetterContainer>
          {lettersArray.map(letter => (
            <LetterLink
              key={letter}
              letter={letter}
              isDisabled={!availableLetters.includes(letter)}
            />
          ))}
        </LetterContainer>
        <div>
          {availableLetters.map(availableLetter => {
            return (
              <Fragment key={availableLetter}>
                <LetterGroup letter={availableLetter}>
                  {paradeGroups
                    .filter(group => {
                      if (availableLetter === '#') {
                        // get groups starting with non-letter characters
                        return group.name.charCodeAt(0) < 65
                      }
                      return filterGroupByFirstLetter(
                        group.name,
                        availableLetter
                      )
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
      </ScrollingContainer>
    </>
  )
}

ParadeGroupsContainer.propTypes = {
  paradeGroups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default ParadeGroupsContainer
