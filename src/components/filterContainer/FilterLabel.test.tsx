import React from 'react'
import { v4 as uuid } from 'uuid'
import { render, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import FilterLabel from './FilterLabel'

describe(FilterLabel.name, () => {
  it('executes handler when filter is clicked', () => {
    const filterName = uuid()
    const filterType = 'checkbox'
    const handleSelect = jest.fn()

    const { getByRole } = render(
      <FilterLabel
        filterName={filterName}
        filterColour="#FFF"
        filterType={filterType}
        isSelected
        handleSelect={handleSelect}
      />
    )

    act(() => {
      fireEvent.click(getByRole(filterType))
    })

    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith(filterName)
  })
})
