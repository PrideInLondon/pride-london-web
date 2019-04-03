import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import BannerDate from './'
import 'jest-styled-components'

describe('<BannerDate/>', () => {
  it('renders', () => {
    const wrapper = shallow(<BannerDate>foo</BannerDate>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a <p/>', () => {
    const text = 'foo'
    const wrapper = shallow(<BannerDate>{text}</BannerDate>)
    expect(wrapper.find('bannerDate__BannerDate')).toHaveLength(1)
    expect(wrapper.find('bannerDate__BannerDate').text()).toBe(text)
  })
})
