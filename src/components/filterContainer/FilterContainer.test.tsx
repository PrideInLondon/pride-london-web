import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { v4 as uuid } from 'uuid'
import { act } from 'react-dom/test-utils'
import FilterContainer, { calculateIsSelected } from './FilterContainer'

describe('calculateIsSelected', () => {
  it.each`
    role          | selected                 | expected
    ${'checkbox'} | ${['foo', 'bar', 'baz']} | ${true}
    ${'checkbox'} | ${['foo', 'baz']}        | ${false}
    ${'radio'}    | ${'bar'}                 | ${true}
    ${'radio'}    | ${'foo'}                 | ${false}
  `(
    'should return $expected when given role $role and selected $selected',
    ({ role, selected, expected }) => {
      const isSelected = calculateIsSelected(role, 'bar', selected)
      expect(isSelected).toEqual(expected)
    }
  )
})

describe(FilterContainer.name, () => {
  it('should call handler with selected filter name when label is clicked', () => {
    const filterType = 'checkbox'
    const categories = Array.from(Array(3).keys()).map(_ => ({
      title: uuid(),
      hexColour: uuid(),
    }))
    const handleFilterSelect = jest.fn()

    const { queryAllByRole } = render(
      <FilterContainer
        filterType={filterType}
        categories={categories}
        selected={[]}
        handleFilterSelect={handleFilterSelect}
      />
    )

    categories.forEach(({ title }, index) => {
      act(() => {
        fireEvent.click(queryAllByRole(filterType)[index])
      })

      expect(handleFilterSelect).toHaveBeenCalledTimes(index + 1)
      expect(handleFilterSelect).toHaveBeenLastCalledWith(title)
    })
  })
})
