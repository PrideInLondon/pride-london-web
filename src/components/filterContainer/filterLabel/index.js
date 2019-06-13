import React from 'react'
import PropTypes from 'prop-types'
import { filterTypes } from '../../../constants'
import { Label, Text, Input } from './styles'

const FilterLabel = ({
  filterName,
  filterColour,
  filterType,
  isSelected,
  handleSelect,
}) => (
  <Label
    backgroundColor={filterColour}
    isSelected={isSelected}
    htmlFor={filterName}
    tabIndex="0"
  >
    <Text>{filterName}</Text>
    <Input
      onClick={() => handleSelect(filterName)}
      type={filterType}
      value={filterName}
      id={filterName}
      name="filterLabel"
      tabIndex="-1"
    />
  </Label>
)

FilterLabel.propTypes = {
  filterName: PropTypes.string.isRequired,
  filterColour: PropTypes.string.isRequired,
  filterType: PropTypes.oneOf(filterTypes).isRequired,
  isSelected: PropTypes.bool.isRequired,
  handleSelect: PropTypes.func.isRequired,
}

export default FilterLabel
