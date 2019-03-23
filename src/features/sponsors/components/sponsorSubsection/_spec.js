import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import SponsorsSubsection from '../sponsorSubsection'
import SponsorStar from '../../../../components/icons/sponsorStar'
import renderSponsors from '../../helpers'

const mockSponsors = [
  {
    level: 'Headline',
    logo: '/logo1',
    name: 'Sponsor One',
    url: 'https://sponsor1.com',
  },
  {
    level: 'Headline',
    logo: '/logo2',
    name: 'Sponsor Two',
    url: 'https://sponsor2.com',
  },
]

describe('<SponsorSubsection/>', () => {
  it('Should render and match snapshot', () => {
    const wrapper = shallow(
      <SponsorsSubsection title="Bronze sponsors" icon={<SponsorStar />}>
        {renderSponsors(mockSponsors)}
      </SponsorsSubsection>
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(wrapper.find('SponsorBadge').length).toBe(mockSponsors.length)
  })
})
