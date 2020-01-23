import React, { useContext } from 'react'
import { rgba } from 'polished'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import { AppContext } from '../appContext'
import Checkbox from '../checkbox'
import constants from '../../constants'
import { CheckboxSetProps } from './CheckboxSet.types'

const List = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  border-top: 2px solid transparent;
  box-sizing: border-box;
  background-color: ${theme.colors.white};

  ${media.tablet`
    box-shadow: 0 2px 4px 0 ${rgba(theme.colors.black, 0.2)};
  `};
`
const ListItem = styled.li`
  padding: 8px 10px;

  &:last-child {
    margin-bottom: 0;
  }

  ${media.tablet`
    transition: background-color 0.15s linear;
    border-radius: 4px;
    
    &:hover {
      background-color: ${theme.colors.lightGrey};
    }
  `};
`

const CheckboxSet = ({ filterName, sort = null }: CheckboxSetProps) => {
  const appContext = useContext(AppContext)

  const options = constants[filterName] || []

  const makeId = (inputId: string) => {
    const id = inputId
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/ /g, '_')
      .toLowerCase()
    return `${filterName}_${id}`
  }

  if (sort) {
    options.sort()
    if (sort === 'DESC') {
      options.reverse()
    }
  }

  return (
    <List>
      {options.map(option => (
        <ListItem key={makeId(option)}>
          <Checkbox
            checked={appContext.state.filters[filterName].indexOf(option) >= 0}
            label={option}
            value={option}
            id={makeId(option)}
            name={makeId(option)}
            handleChange={e =>
              appContext.actions.getCheckboxSetValues(e, filterName)
            }
          />
        </ListItem>
      ))}
    </List>
  )
}

export default CheckboxSet
