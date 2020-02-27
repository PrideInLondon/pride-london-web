import React from 'react'
import { mount } from 'enzyme'
import SponsorBadge from './SponsorBadge'
import { mockSponsors } from './__mocks__'
import { renderSponsors } from './helpers'

describe('<SponsorBadge/>', () => {
  it('renders sponsors correctly', () => {
    const wrapper = mount(<span>{renderSponsors(mockSponsors)}</span>)
    expect(wrapper.find(SponsorBadge)).toHaveLength(mockSponsors.length)
  })

  it('renders sponsors correctly with prevent level size', () => {
    const wrapper = mount(<span>{renderSponsors(mockSponsors, true)}</span>)
    expect(wrapper.find(SponsorBadge)).toHaveLength(mockSponsors.length)
  })
})
