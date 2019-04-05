import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import Footer from '../footer'
import { mockSponsors } from './_mocks'

describe('<Footer/>', () => {
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn(),
    }
  })

  afterAll(() => {
    global.___loader.enqueue.mockReset()
    global.window.matchMedia.mockReset()
  })

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
})
