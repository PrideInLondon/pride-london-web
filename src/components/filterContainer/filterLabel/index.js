import React from 'react'
import PropTypes from 'prop-types'
import { Label, Text, Input } from './styles'

export const FILTER_TYPES = ['checkbox', 'radio']

const FilterLabel = ({
  filterName,
  filterColor,
  filterType,
  isSelected,
  handleSelect,
}) => {
  return (
    <Label
      onClick={() => handleSelect(filterName)}
      backgroundColor={filterColor}
      isSelected={isSelected}
      htmlFor={filterName}
      tabIndex="0"
    >
      <Text>{filterName}</Text>
      <Input
        type={filterType}
        value={filterName}
        id={filterName}
        name="filterLabel"
        tabIndex="-1"
      />
    </Label>
  )
}

FilterLabel.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterColor: PropTypes.string.isRequired,
  filterType: PropTypes.oneOf(FILTER_TYPES).isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default FilterLabel
