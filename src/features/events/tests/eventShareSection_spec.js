import React from 'react'
import { shallow } from 'enzyme'
import ShareSection from '../components/eventShareSection'

describe(ShareSection.name, () => {
  const event = {
    name: 'Test event name',
    date: '2006-06-02T13:30+01:00',
    location: 'https://foo.com',
  }

  it('render correctly', () => {
    process.env.GATSBY_FACEBOOK_APP_ID = null
    const wrapper = shallow(<ShareSection {...event} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('render correctly with FB ID', () => {
    process.env.GATSBY_FACEBOOK_APP_ID = 'foo'
    const wrapper = shallow(<ShareSection {...event} />)
    expect(wrapper).toMatchSnapshot()
  })
})
