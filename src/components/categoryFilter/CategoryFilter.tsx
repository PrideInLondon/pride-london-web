import React from 'react'
import { calculateIsSelected } from '../filterContainer'
import { Wrapper, StyledTag, Input } from './CategoryFilter.styles'
import { CategoryFilterProps } from './CategoryFilter.types'

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  filterType,
  categories,
  selected,
  handleFilterSelect,
}) => (
  <Wrapper>
    {categories.map(({ name, color }) => (
      <StyledTag
        key={name}
        color={color}
        variant={
          calculateIsSelected(filterType, name, selected)
            ? 'primary'
            : 'outline'
        }
      >
        {name}
        <Input
          type={filterType}
          value={name}
          onClick={() => handleFilterSelect(name)}
        />
      </StyledTag>
    ))}
  </Wrapper>
)
