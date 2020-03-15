import React from 'react'
import { mount } from 'enzyme'
import * as Intercom from 'react-intercom'
import { v4 as uuid } from 'uuid'
import Footer from './Footer'

const generateMockSponsors = numberOfSponsors => ({
  allContentfulSponsor: {
    edges: [...Array(numberOfSponsors).keys()].map(_ => ({
      node: {
        id: uuid(),
        sponsorName: uuid(),
        sponsorUrl: uuid(),
        sponsorLogo: {
          sizes: {
            src: uuid(),
          },
        },
        sponsorLevel: 'Headline',
      },
    })),
  },
})

describe('<Footer/>', () => {
  const NUMBER_OF_SPONSORS = 5

  let mockSponsors, wrapper, intercomSpy
  beforeEach(() => {
    mockSponsors = generateMockSponsors(NUMBER_OF_SPONSORS)
    wrapper = mount(<Footer data={mockSponsors} />)
    intercomSpy = jest.spyOn(Intercom, 'IntercomAPI')
  })

  it('should render sponsors', () => {
    expect(
      wrapper.find('Footerstyles__SponsorsSection').find('img')
    ).toHaveLength(NUMBER_OF_SPONSORS)
  })

  it('click on Contact us link and open Intercom', () => {
    wrapper
      .find('Footerstyles__LegalLink')
      .last()
      .simulate('click')
    expect(intercomSpy).toHaveBeenCalled()
  })
})
