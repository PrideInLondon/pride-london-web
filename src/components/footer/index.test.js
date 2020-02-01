import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import * as Intercom from 'react-intercom'
import Footer from '../footer'
import { mockSponsors } from './__mocks__'

describe('<Footer/>', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(<Footer data={mockSponsors} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render sponsors', () => {
    const sponsorCount = mockSponsors.allContentfulSponsor.edges.length
    const wrapper = mount(<Footer data={mockSponsors} />)
    expect(wrapper.find('styles__SponsorsSection').find('img')).toHaveLength(
      sponsorCount
    )
  })

  it('click on Contact us link and open Intercom', () => {
    const spy = jest.spyOn(Intercom, 'IntercomAPI')
    const wrapper = mount(<Footer data={mockSponsors} />)
    wrapper
      .find('styles__LegalLink')
      .last()
      .simulate('click')
    expect(spy).toHaveBeenCalled()
  })

  it('click on Report a website bug and open typeform', () => {
    const wrapper = mount(<Footer data={mockSponsors} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    wrapper
      .find('styles__LegalLink[children="Report a website bug"]')
      .simulate('click')
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
