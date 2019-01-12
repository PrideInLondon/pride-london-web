import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import StyledBannerSubtitle from './'

describe('BannerSubtitle', () => {
  it('should render', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a Wrapper', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper.find('SubtitleWrapper')).toHaveLength(1)
  })

  it('should render a Text', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper.find('SubtitleText')).toHaveLength(1)
  })

  it('should render child text ', () => {
    const text = 'And here is a test subtitle!'
    const wrapper = shallow(<StyledBannerSubtitle>{text}</StyledBannerSubtitle>)
    expect(wrapper).toMatchSnapshot()
  })
})
