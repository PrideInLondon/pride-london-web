import React from 'react'
import { shallow } from 'enzyme'
import AnnouncementCard from '.'

describe('<AnnouncementCard/>', () => {
  it('renders with default values', () => {
    const wrapper = shallow(
      <AnnouncementCard
        title="foobar"
        url="http://google.com"
        image={{ fixed: {}, alt: 'blah blah' }}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
