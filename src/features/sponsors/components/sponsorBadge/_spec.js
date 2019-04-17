import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import SponsorBadge from '../sponsorBadge'

const mockSponsor = {
  level: 'Headline',
  logo: '/logo1',
  name: 'Sponsor One',
  url: 'https://sponsor1.com',
}

describe('<SponsorBadge/>', () => {
  it('Should render and match snapshot', () => {
    const wrapper = shallow(<SponsorBadge {...mockSponsor} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.prop('href')).toBe(mockSponsor.url)
  })
})
