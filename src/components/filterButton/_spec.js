import React from 'react'
import { shallow, mount } from 'enzyme'
import { FilterLabel } from './styles'
import FilterButton from '.'
import 'jest-styled-components'

describe(FilterButton.name, () => {
  const mockClick = jest.fn()
  const iconSrc = 'foo'
  const filterType = {
    hexColour: '#000000',
    title: 'Mock Filter',
  }

  it('renders with default values', () => {
    const wrapper = shallow(<FilterButton filterType={filterType} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders with icon', () => {
    const wrapper = shallow(
      <FilterButton filterType={filterType} icon={iconSrc} />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('selected filter render correctly', () => {
    const wrapper = shallow(
      <FilterButton
        filterType={filterType}
        isOutline
        isButton
        handleClick={mockClick}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('not-selected filter render correctly', () => {
    const wrapper = shallow(
      <FilterButton
        filterType={filterType}
        isOutline={false}
        handleClick={mockClick}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleClick when filter is clicked', () => {
    const wrapper = shallow(
      <FilterButton
        filterType={filterType}
        isOutline={false}
        handleClick={mockClick}
      />
    )

    expect(mockClick).not.toHaveBeenCalled()
    wrapper
      .find(FilterLabel)
      .first()
      .simulate('click')
    expect(mockClick).toHaveBeenCalled()
  })
})

describe(FilterLabel.name, () => {
  it('should render FilterLabel with the correct styles - test 1', () => {
    const component = mount(<FilterLabel isOutline backgroundColor="#FFD95E" />)
    expect(component).toHaveStyleRule('background-color', 'transparent')
    expect(component).toHaveStyleRule('border-color', '#FFD95E')
  })

  it('should render FilterLabel with the correct styles - test 2', () => {
    const component = mount(
      <FilterLabel isOutline={false} backgroundColor="#660C63" />
    )
    expect(component).toHaveStyleRule('background-color', '#660C63')
  })

  it('should render FilterLabel as button with the correct styles - test 3', () => {
    const component = mount(
      <FilterLabel isOutline backgroundColor="#FFD95E" isButton />
    )
    expect(component).toHaveStyleRule('background-color', 'transparent')
    expect(component).toHaveStyleRule('border-color', '#FFD95E')
  })

  it('should render FilterLabel as button with the correct styles - test 4', () => {
    const component = mount(
      <FilterLabel isOutline={false} backgroundColor="#660C63" isButton />
    )
    expect(component).toHaveStyleRule('background-color', '#660C63')
  })
})
