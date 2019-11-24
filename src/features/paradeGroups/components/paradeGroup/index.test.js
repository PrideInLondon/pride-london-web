import React from 'react'
import { shallow } from 'enzyme'
import ParadeGroup from '.'

describe(ParadeGroup.name, () => {
  describe('given correct props', () => {
    it('should render as expected', () => {
      const props = {
        name: 'My parade group',
        instagramUrl: 'instagram.com/1234',
        facebookUrl: 'http://facebook.com/2j2j',
        twitterUrl: 'twitter.co/foo',
        websiteUrl: 'www.group.com',
        emailUrl: 'foo@foo.com',
      }

      const wrapper = shallow(<ParadeGroup {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
