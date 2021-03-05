import React, { useState, useEffect } from 'react'
import { calculateIsSelected } from '../filterContainer'
import { calculateSelected } from '../filteredPagedCardContainer'
import { Wrapper, StyledTag } from './CategoryFilter.styles'
import {
  CategoryFilterProps,
  CategoryFilterVariant,
  Category,
} from './CategoryFilter.types'

export const calculateInitialSelected = (
  variant: CategoryFilterVariant,
  categories: Category[]
): string | string[] => {
  const nonSelectAllCategories = categories.filter(
    ({ isSelectAll }) => !isSelectAll
  )
  const selectAllCategoryExists =
    categories.length !== nonSelectAllCategories.length
  const [{ name }] = nonSelectAllCategories
  switch (variant) {
    case 'checkbox':
      return selectAllCategoryExists ? [] : [name]
    case 'radio':
      return selectAllCategoryExists ? '' : name
  }
}

export const CategoryFilter = <T,>({
  variant,
  categories,
  entries,
  render,
  ...props
}: CategoryFilterProps & {
  entries: T[]
  render: (renderProps: {
    entries: (predicate: (entry: T) => string | string[]) => T[]
  }) => React.ReactNode
}) => {
  const [selectAll, setSelectAll] = useState(
    !!categories.find(({ isSelectAll }) => isSelectAll)
  )
  const [selected, setSelected] = useState(
    calculateInitialSelected(variant, categories)
  )

  useEffect(() => {
    setSelected(calculateInitialSelected(variant, categories))
  }, [variant, categories])

  useEffect(() => {
    // When all checkbox options are unselected, revert to selecting all
    if (variant === 'checkbox' && !selected.length) {
      setSelectAll(true)
    }
  }, [variant, selected])

  return (
    <>
      <Wrapper {...props}>
        {categories.map(({ name, color, isSelectAll }) => {
          const isSelected = isSelectAll
            ? selectAll
            : calculateIsSelected(variant, name, selected)

          return (
            <StyledTag
              key={name}
              color={color}
              variant={isSelected ? 'primary' : 'outline'}
              role={variant}
              aria-checked={isSelected}
              onClick={() => {
                setSelectAll(!!isSelectAll)
                setSelected(
                  isSelectAll
                    ? calculateInitialSelected(variant, categories)
                    : calculateSelected(variant, name, selected)
                )
              }}
            >
              {name}
            </StyledTag>
          )
        })}
      </Wrapper>
      {render({
        entries: predicate =>
          selectAll
            ? entries
            : entries.filter(entry =>
                calculateIsSelected(variant, predicate(entry), selected)
              ),
      })}
    </>
  )
}
