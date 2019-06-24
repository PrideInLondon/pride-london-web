import React from 'react'
import { shallow } from 'enzyme'
import ParadeGroup from '.'

describe(ParadeGroup.name, () => {
  describe('given correct props', () => {
    it('should render as expected', () => {
      const props = {
        name: 'My parade group',
        socialInstagram: 'instagram.com/1234',
        socialFacebook: 'http://facebook.com/2j2j',
        socialTwitter: 'twitter.co/foo',
        socialWebsite: 'www.group.com',
        socialEmail: 'foo@foo.com',
      }

      const wrapper = shallow(<ParadeGroup {...props} />)
      expect(wrapper).toMatchSnapshot()
    })
  })
})
