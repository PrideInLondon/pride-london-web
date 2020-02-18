import React from 'react'
import { shallow } from 'enzyme'
import BannerDate from './'

describe('<BannerDate/>', () => {
  it('renders a paragraph', () => {
    const text = 'foo'
    const wrapper = shallow(<BannerDate>{text}</BannerDate>)
    expect(wrapper.find('styles__BannerDate')).toHaveLength(1)
    expect(wrapper.find('styles__BannerDate').text()).toBe(text)
  })
})
