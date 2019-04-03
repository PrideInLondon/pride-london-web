import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import ImageBanner from './'
import 'jest-styled-components'

describe('ImageBanner', () => {
  it('renders', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find('StyledBannerTitle')).toHaveLength(1)
  })

  it('renders a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find('StyledBannerSubtitle')).toHaveLength(1)
  })

  it('renders a <BannerDate /> if passed a date prop', () => {
    const date = 'Saturday 6th July'
    const wrapper = shallow(<ImageBanner date={date} />)
    expect(wrapper.find('StyledBannerDate')).toHaveLength(1)
  })

  it('renders a background image on the wrapper if passed an imageSrc prop and imageFullWidth prop', () => {
    const src = 'foo'
    const wrapper = mount(<ImageBanner imageSrc={src} imageFullWidth />)
    expect(wrapper.find('styles__StyledWrapper')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  it('renders a background image on the container if passed an imageSrc prop', () => {
    const src = 'foo'
    const wrapper = mount(<ImageBanner imageSrc={src} />)
    expect(wrapper.find('styles__StyledContainer')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  it('renders the titleText from props to BannerTitle ', () => {
    const titleText = 'Here is a test title!'
    const wrapper = shallow(<ImageBanner titleText={titleText} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(
      wrapper
        .dive()
        .find(BannerTitle)
        .props().children
    ).toBe(titleText)
  })

  it('renders the subtitleText from props to BannerSubtitle', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = shallow(<ImageBanner subtitleText={subtitleText} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(
      wrapper
        .dive()
        .find(BannerSubtitle)
        .props().children
    ).toBe(subtitleText)
  })
})
