import React from 'react'
import { shallow } from 'enzyme'
import StyledBannerSubtitle from './'

describe('<BannerSubtitle />', () => {
  it('renders the component <BannerSubtitle />', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a wrapper', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper.find('SubtitleWrapper')).toHaveLength(1)
  })

  it('renders a text', () => {
    const wrapper = shallow(
      <StyledBannerSubtitle>
        <h1>Hey</h1>
      </StyledBannerSubtitle>
    )
    expect(wrapper.find('SubtitleText')).toHaveLength(1)
  })

  it('renders a child text ', () => {
    const text = 'And here is a test subtitle!'
    const wrapper = shallow(<StyledBannerSubtitle>{text}</StyledBannerSubtitle>)
    expect(wrapper).toMatchSnapshot()
  })
})
