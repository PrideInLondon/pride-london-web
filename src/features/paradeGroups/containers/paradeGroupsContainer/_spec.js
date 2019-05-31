import React from 'react'
import { shallow } from 'enzyme'
import ParadeGroupsContainer from '.'

describe(ParadeGroupsContainer.name, () => {
  it('should render correctly', () => {
    const paradeGroups = [
      { name: 'group 1', id: '1' },
      { name: 'group 2', id: '2' },
    ]
    const wrapper = shallow(
      <ParadeGroupsContainer paradeGroups={paradeGroups} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
