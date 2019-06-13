import React from 'react'
import { shallow } from 'enzyme'
import ParadeGroupsFilterContainer from '.'

describe(ParadeGroupsFilterContainer.name, () => {
  it('should render correctly', () => {
    const handleFilterClick = jest.fn()

    const categories = [
      {
        title: 'All groups',
        hexColour: '#FFD95E',
      },
      {
        title: 'Arts',
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
