import React from 'react'
import { shallow } from 'enzyme'
import ParadeGroupsContainer from '.'

describe(ParadeGroupsContainer.name, () => {
  it('should render correctly', () => {
    const paradeGroups = [
      { name: 'group 1', id: '1', category: ['Arts'] },
      { name: 'group 2', id: '2', category: ['Business'] },
    ]

    const categories = [
      {
        title: 'All groups',
        hexColour: '#FFD95E',
      },
      {
        title: 'Arts',
        hexColour: '#FF5B44',
      },
      {
        title: 'Business',
        hexColour: '#ED2C6E',
      },
    ]

    const wrapper = shallow(
      <ParadeGroupsContainer
        paradeGroups={paradeGroups}
        categories={categories}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
