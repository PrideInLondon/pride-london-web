import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import SponsorBadge from '../sponsorBadge'
import { mockSponsor } from './_mocks'

describe('<SponsorBadge/>', () => {
  it('renders the component <SponsorBadge />', () => {
    const wrapper = shallow(<SponsorBadge {...mockSponsor} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.prop('href')).toBe(mockSponsor.url)
  })

  it('renders the component <SponsorBadge /> and prevent level size', () => {
    const wrapper = shallow(<SponsorBadge {...mockSponsor} preventLevelSize />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.prop('href')).toBe(mockSponsor.url)
  })
})
