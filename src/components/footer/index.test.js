import React from 'react'
import { mount } from 'enzyme'
import * as Intercom from 'react-intercom'
import Footer from '../footer'
import { mockSponsors } from './__mocks__'

describe('<Footer/>', () => {
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
})
