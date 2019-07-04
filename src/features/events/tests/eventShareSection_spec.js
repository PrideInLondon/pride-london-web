import React from 'react'
import { mount } from 'enzyme'
import ShareSection from '../components/eventShareSection'

describe(ShareSection.name, () => {
  const event = {
    name: 'Test event name',
    date: '2006-06-02T13:30+01:00',
    location: 'https://foo.com',
  }

  it('render correctly', () => {
    process.env.GATSBY_FACEBOOK_APP_ID = null
    const wrapper = mount(<ShareSection {...event} />)
    expect(wrapper.find('eventShareSection__ShareLink').length).not.toBe(1)
  })

  it('render correctly with FB ID', () => {
    process.env.GATSBY_FACEBOOK_APP_ID = 'foo'
    const wrapper = mount(<ShareSection {...event} />)
    expect(wrapper.find('eventShareSection__ShareLink').length).not.toBe(1)
  })
})
