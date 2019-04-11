import React from 'react'
import { shallow } from 'enzyme'
import SocialList from '.'

describe(SocialList.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<SocialList />)
    expect(wrapper).toMatchSnapshot()
  })
})
