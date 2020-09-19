import React from 'react'
import { Label, Text, Input } from './FilterLabel.styles'
import { FilterLabelProps } from './FilterLabel.types'

const FilterLabel: React.FC<FilterLabelProps> = ({
  filterName,
  filterColour,
  filterType,
  isSelected,
  handleSelect,
}) => (
  <Label
    filterColour={filterColour}
    isSelected={isSelected}
    htmlFor={filterName}
    tabIndex={0}
  >
    <Text>{filterName}</Text>
    <Input
      onClick={() => handleSelect(filterName)}
      type={filterType}
      value={filterName}
      id={filterName}
      name="filterLabel"
      tabIndex={-1}
      aria-label={filterName}
    />
  </Label>
)

export default FilterLabel
