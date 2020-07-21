import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import { act } from 'react-dom/test-utils'
import { CategoryFilter } from './CategoryFilter'

describe(CategoryFilter.name, () => {
  it('should call handler with selected filter name when label is clicked', () => {
    const filterType = 'checkbox'
    const categories = Array.from(Array(3).keys()).map(_ => ({
      name: uuid(),
      color: uuid(),
    }))
    const handleFilterSelect = jest.fn()

    const { queryAllByRole } = render(
      <CategoryFilter
        filterType={filterType}
        categories={categories}
        selected={[]}
        handleFilterSelect={handleFilterSelect}
      />
    )

    categories.forEach(({ name }, index) => {
      act(() => {
        fireEvent.click(queryAllByRole(filterType)[index])
      })

      expect(handleFilterSelect).toHaveBeenCalledTimes(index + 1)
      expect(handleFilterSelect).toHaveBeenLastCalledWith(name)
    })
  })
})
