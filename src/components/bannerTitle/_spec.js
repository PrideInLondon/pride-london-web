import React from 'react'
import { shallow } from 'enzyme'
import theme from '../../theme/theme'
import BannerTitle from './'
import 'jest-styled-components'

describe('BannerTitle', () => {
  it('renders', () => {
    const tree = shallow(<BannerTitle>foo</BannerTitle>)
    expect(tree).toMatchSnapshot()
  })

  it('renders a <h1 />', () => {
    const wrapper = shallow(<BannerTitle>foo</BannerTitle>)
    expect(wrapper.find('bannerTitle__BannerTitle')).toHaveLength(1)
  })

  it('renders child text ', () => {
    const text = 'Here is a test title!'
    const wrapper = shallow(<BannerTitle>{text}</BannerTitle>, {
      context: { theme },
    })
    // Currently having issues testing with enzyme as the theme does not get provided to the styled componentw
    expect(wrapper).toMatchSnapshot()
  })
})
