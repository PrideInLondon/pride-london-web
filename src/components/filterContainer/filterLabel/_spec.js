import React from 'react'
import { mount, shallow } from 'enzyme'
import FilterLabel from '.'

describe('FilterLabel', () => {
  it('renders when selected', () => {
    const wrapper = mount(
      <FilterLabel
        filterName="foo"
        filterColour="bar"
        filterType="checkbox"
        isSelected
        handleSelect={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders when not selected', () => {
    const wrapper = mount(
      <FilterLabel
        filterName="foo"
        filterColour="bar"
        filterType="radio"
        isSelected={false}
        handleSelect={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

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
    wrapper.find('styles__Label').simulate('click')
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith('foo')
  })
})
