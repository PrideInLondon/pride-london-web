import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import SponsorBadge from '../sponsorBadge'
import { mockSponsor, mockSponsor2, mockSponsorWithoutLogo } from './_mocks'

describe('<SponsorBadge/>', () => {
  it('renders the component <SponsorBadge />', () => {
    const wrapper = shallow(<SponsorBadge {...mockSponsor} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.prop('href')).toBe(mockSponsor.url)
  })

  it('renders the component <SponsorBadge /> with small size sponsor', () => {
    const wrapper = mount(<SponsorBadge {...mockSponsor2} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the component <SponsorBadge /> with big size sponsor', () => {
    const wrapper = mount(<SponsorBadge {...mockSponsor} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the component <SponsorBadge /> without logo', () => {
    const wrapper = mount(<SponsorBadge {...mockSponsorWithoutLogo} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders the component <SponsorBadge /> and prevent level size', () => {
    const wrapper = shallow(<SponsorBadge {...mockSponsor} preventLevelSize />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.prop('href')).toBe(mockSponsor.url)
  })
})
