import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import BannerDate from './'
import 'jest-styled-components'

describe('<BannerDate/>', () => {
  it('renders the component BannerDate', () => {
    const wrapper = shallow(<BannerDate>foo</BannerDate>)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a paragraph', () => {
    const text = 'foo'
    const wrapper = shallow(<BannerDate>{text}</BannerDate>)
    expect(wrapper.find('styles__BannerDate')).toHaveLength(1)
    expect(wrapper.find('styles__BannerDate').text()).toBe(text)
  })
})
