import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'
import theme from '../../theme/theme'

import BannerTitle from './'

describe('BannerTitle', () => {
  it('should render', () => {
    const tree = shallow(<BannerTitle>foo</BannerTitle>)
    expect(tree).toMatchSnapshot()
  })

  it('should render a <h1 />', () => {
    const wrapper = shallow(<BannerTitle>foo</BannerTitle>)
    expect(wrapper.find('TestBannerTitle')).toHaveLength(1)
  })

  it('should render child text ', () => {
    const text = 'Here is a test title!'
    const wrapper = shallow(<BannerTitle>{text}</BannerTitle>, {
      context: { theme },
    })
    // Currently having issues testing with enzyme as the theme does not get provided to the styled componentw
    expect(wrapper).toMatchSnapshot()
  })
})
