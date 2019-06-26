import React from 'react'
import { shallow } from 'enzyme'
import ParadeGroupsFilterContainer from '.'

describe(ParadeGroupsFilterContainer.name, () => {
  it('should render correctly', () => {
    const handleFilterClick = jest.fn()

    const categories = [
      {
        title: 'All groups',
        api: 'MAGIC_VALUE_NOT_USED',
        hexColour: '#FFD95E',
      },
      {
        title: 'Arts',
        api: 'ARTS',
        hexColour: '#FF5B44',
      },
    ]

    const wrapper = shallow(
      <ParadeGroupsFilterContainer
        selectedFilter={categories[0]}
        categories={categories}
        handleFilterClick={handleFilterClick}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
