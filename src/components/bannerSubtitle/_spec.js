import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import StyledBannerSubtitle from './'
import 'jest-styled-components'

describe('BannerSubtitle', () => {
  it('renders', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a Wrapper', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper.find('SubtitleWrapper')).toHaveLength(1)
  })

  it('renders a Text', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper.find('SubtitleText')).toHaveLength(1)
  })

  it('renders child text ', () => {
    const text = 'And here is a test subtitle!'
    const wrapper = shallow(
      <StyledBannerSubtitle>
        {text}
      </StyledBannerSubtitle>)
    expect(wrapper).toMatchSnapshot()
  })
})
