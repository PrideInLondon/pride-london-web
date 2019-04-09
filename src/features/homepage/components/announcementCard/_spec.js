import React from 'react'
import { shallow } from 'enzyme'
import CardAnnouncement from '.'

describe(CardAnnouncement.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<CardAnnouncement />)
    expect(wrapper).toMatchSnapshot()
  })
})
