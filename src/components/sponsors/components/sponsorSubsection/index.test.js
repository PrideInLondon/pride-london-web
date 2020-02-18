import React from 'react'
import { shallow } from 'enzyme'
import SponsorsSubsection from '../sponsorSubsection'
import SponsorStar from '../../../../components/icons/sponsorStar'
import renderSponsors from '../../helpers'
import { mockSponsors } from './__mocks__'

describe('<SponsorSubsection/>', () => {
  it('renders the component <SponsorSubsection />', () => {
    const wrapper = shallow(
      <SponsorsSubsection title="Bronze sponsors" icon={<SponsorStar />}>
        {renderSponsors(mockSponsors)}
      </SponsorsSubsection>
    )
    expect(wrapper.find('SponsorBadge').length).toBe(mockSponsors.length)
  })

  it('renders the component <SponsorSubsection /> and prevent level sizes', () => {
    const wrapper = shallow(
      <SponsorsSubsection title="Bronze sponsors" icon={<SponsorStar />}>
        {renderSponsors(mockSponsors, true)}
      </SponsorsSubsection>
    )
    expect(wrapper.find('SponsorBadge').length).toBe(mockSponsors.length)
  })
})
