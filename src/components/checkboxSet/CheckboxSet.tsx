import React, { useContext } from 'react'
import { AppContext } from '../appContext'
import Checkbox from '../checkbox'
import constants from '../../constants'
import { List, ListItem } from './CheckboxSet.styles'
import { CheckboxSetProps } from './CheckboxSet.types'

const CheckboxSet = ({ filterName, sort = null }: CheckboxSetProps) => {
  const appContext = useContext(AppContext)

  // @ts-ignore - refactoring of constants required
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
      {options.map((option: string) => (
        <ListItem key={makeId(option)}>
          <Checkbox
            //  @ts-ignore - refactoring of appContext required
            checked={appContext.state.filters[filterName].indexOf(option) >= 0}
            label={option}
            value={option}
            id={makeId(option)}
            name={makeId(option)}
            handleChange={e => {
              //  @ts-ignore - refactoring of appContext required
              return appContext.actions.getCheckboxSetValues(e, filterName)
            }}
          />
        </ListItem>
      ))}
    </List>
  )
}

export default CheckboxSet
