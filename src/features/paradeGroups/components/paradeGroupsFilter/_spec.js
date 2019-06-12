import React from 'react'
import { shallow, mount } from 'enzyme'
import { FilterDiv } from './styles'
import ParadeGroupsFilter from '.'
import 'jest-styled-components'

describe(FilterDiv.name, () => {
  it('should render FilterLabel with the correct styles - test 1', () => {
    const component = mount(<FilterDiv isOutline backgroundColor="#FFD95E" />)
    expect(component).toHaveStyleRule('background-color', 'transparent')
    expect(component).toHaveStyleRule('border-color', '#FFD95E')
  })

  it('should render FilterLabel with the correct styles - test 2', () => {
    const component = mount(
      <FilterDiv isOutline={false} backgroundColor="#660C63" />
    )
    expect(component).toHaveStyleRule('background-color', '#660C63')
  })
})

describe(ParadeGroupsFilter.name, () => {
  const mockClick = jest.fn()

  const filterType = {
    title: 'All groups',
    hexColour: '#FFD95E',
  }

  it('selected filter render correctly', () => {
    const wrapper = shallow(
      <ParadeGroupsFilter
        filterType={filterType}
        isOutline
        handleClick={mockClick}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('not-selected filter render correctly', () => {
    const wrapper = shallow(
      <ParadeGroupsFilter
        filterType={filterType}
        isOutline={false}
        handleClick={mockClick}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleClick when filter is clicked', () => {
    const wrapper = shallow(
      <ParadeGroupsFilter
        filterType={filterType}
        isOutline={false}
        handleClick={mockClick}
      />
    )

    expect(mockClick).not.toHaveBeenCalled()
    wrapper
      .find(FilterDiv)
      .first()
      .simulate('click')
    expect(mockClick).toHaveBeenCalled()
  })
})
