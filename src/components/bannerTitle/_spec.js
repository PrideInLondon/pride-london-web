import React from 'react'
import { shallow } from 'enzyme'
import theme from '../../theme/theme'
import BannerTitle from './'
import 'jest-styled-components'

describe('<BannerTitle />', () => {
  it('renders the component <BannerTitle />', () => {
    const tree = shallow(<BannerTitle>foo</BannerTitle>)
    expect(tree).toMatchSnapshot()
  })

  it('renders a header H1', () => {
    const wrapper = shallow(<BannerTitle>foo</BannerTitle>)
    expect(wrapper.find('styles__BannerTitle')).toHaveLength(1)
  })

  it('renders a child text ', () => {
    const text = 'Here is a test title!'
    const wrapper = shallow(<BannerTitle>{text}</BannerTitle>, {
      context: { theme },
    })
    expect(wrapper).toMatchSnapshot()
  })
})
