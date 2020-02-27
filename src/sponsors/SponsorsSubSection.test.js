import React from 'react'
import { shallow } from 'enzyme'
import SponsorStar from '../components/icons/sponsorStar'
import SponsorsSubSection from './SponsorsSubSection'
import { renderSponsors } from './helpers'
import { mockSponsors } from './__mocks__'

describe('<SponsorSubsection/>', () => {
  it('renders the component <SponsorSubsection />', () => {
    const wrapper = shallow(
      <SponsorsSubSection title="Bronze sponsors" icon={<SponsorStar />}>
        {renderSponsors(mockSponsors)}
      </SponsorsSubSection>
    )
    expect(wrapper.find('SponsorBadge').length).toBe(mockSponsors.length)
  })

  it('renders the component <SponsorSubsection /> and prevent level sizes', () => {
    const wrapper = shallow(
      <SponsorsSubSection title="Bronze sponsors" icon={<SponsorStar />}>
        {renderSponsors(mockSponsors, true)}
      </SponsorsSubSection>
    )
    expect(wrapper.find('SponsorBadge').length).toBe(mockSponsors.length)
  })
})
