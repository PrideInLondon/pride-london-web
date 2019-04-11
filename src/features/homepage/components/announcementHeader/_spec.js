import React from 'react'
import { shallow } from 'enzyme'
import AnnouncementHeader from '.'

describe(AnnouncementHeader.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<AnnouncementHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
