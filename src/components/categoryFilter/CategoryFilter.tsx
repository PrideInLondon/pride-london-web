import React, { useState, useEffect } from 'react'
import { calculateIsSelected } from '../filterContainer'
import { calculateSelected } from '../filteredPagedCardContainer'
import { Wrapper, StyledTag } from './CategoryFilter.styles'
import {
  CategoryFilterProps,
  CategoryFilterVariant,
  Category,
} from './CategoryFilter.types'

const calculateInitialSelected = (
  variant: CategoryFilterVariant,
  [{ name }]: Category[]
) => {
  switch (variant) {
    case 'checkbox':
      return [name]
    case 'radio':
      return name
  }
}

export const CategoryFilter = <T,>({
  variant,
  categories,
  entries,
  render,
}: CategoryFilterProps & {
  entries: T[]
  render: (renderProps: {
    entries: (predicate: (entry: T) => string) => T[]
  }) => React.ReactNode
}) => {
  const [selected, setSelected] = useState(
    calculateInitialSelected(variant, categories)
  )

  useEffect(() => {
    setSelected(calculateInitialSelected(variant, categories))
  }, [variant, categories])

  return (
    <>
      <Wrapper>
        {categories.map(({ name, color }) => {
          const isSelected = calculateIsSelected(variant, name, selected)
          return (
            <StyledTag
              key={name}
              color={color}
              variant={isSelected ? 'primary' : 'outline'}
              role={variant}
              aria-checked={isSelected}
              onClick={() =>
                setSelected(calculateSelected(variant, name, selected))
              }
            >
              {name}
            </StyledTag>
          )
        })}
      </Wrapper>
      {render({
        entries: predicate =>
          entries.filter(entry =>
            calculateIsSelected(variant, predicate(entry), selected)
          ),
      })}
    </>
  )
}
