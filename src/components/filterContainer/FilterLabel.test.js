import React from 'react'
import { shallow } from 'enzyme'
import FilterLabel from './FilterLabel'

describe('FilterLabel', () => {
  it('executes handler when filter is clicked', () => {
    const handleSelect = jest.fn()
    const wrapper = shallow(
      <FilterLabel
        filterName="foo"
        filterColour="bar"
        filterType="checkbox"
        isSelected
        handleSelect={handleSelect}
      />
    )
    wrapper.find('FilterLabelstyles__Input').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('foo')
  })
})
