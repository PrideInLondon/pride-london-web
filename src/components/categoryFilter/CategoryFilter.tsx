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
    {categories.map(({ title, hexColour }) => (
      <StyledTag
        key={title}
        color={hexColour}
        variant={
          calculateIsSelected(filterType, title, selected)
            ? 'primary'
            : 'outline'
        }
      >
        {title}
        <Input
          type={filterType}
          value={title}
          onClick={() => handleFilterSelect(title)}
        />
      </StyledTag>
    ))}
  </Wrapper>
)
