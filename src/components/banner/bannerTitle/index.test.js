import React from 'react'
import { shallow } from 'enzyme'
import BannerTitle from './'

describe('<BannerTitle />', () => {
  it('renders a header H1', () => {
    const wrapper = shallow(<BannerTitle>foo</BannerTitle>)
    expect(wrapper.find('styles__BannerTitle')).toHaveLength(1)
  })
})
