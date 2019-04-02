import React from 'react'
import { shallow, mount } from 'enzyme'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import ImageBanner from './'
import 'jest-styled-components'

describe('ImageBanner', () => {
  xit('renders', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper).toMatchSnapshot()
  })

  xit('renders a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerTitle)).toHaveLength(1)
  })

  xit('renders a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerSubtitle)).toHaveLength(1)
  })

  it('renders a background image on the wrapper if passed an imageSrc prop and imageFullWidth prop', () => {
    const src = 'foo'
    const wrapper = mount(<ImageBanner imageSrc={src} imageFullWidth />)
    expect(wrapper.find('imageBanner__StyledWrapper')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  it('renders a background image on the container if passed an imageSrc prop', () => {
    const src = 'foo'
    const wrapper = mount(<ImageBanner imageSrc={src} />)
    expect(wrapper.find('imageBanner__StyledContainer')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  xit('renders an img with imgSrc from props', () => {
    const imageSrc = 'https://www.image.com'
    const wrapper = shallow(<ImageBanner imageSrc={imageSrc} />)
    expect(wrapper.find('img').props().src).toBe(imageSrc)
  })

  xit('renders an img with altText from props', () => {
    const altText = 'background image'
    const wrapper = shallow(<ImageBanner imageSrc="foo" altText={altText} />)
    expect(wrapper.find('img').props().alt).toBe(altText)
  })

  xit('renders the titleText from props to BannerTitle ', () => {
    const titleText = 'Here is a test title!'
    const wrapper = shallow(<ImageBanner titleText={titleText} />)
    expect(wrapper).toMatchSnapshot()
    expect(
      wrapper
        .dive()
        .find(BannerTitle)
        .props().children
    ).toBe(titleText)
  })

  xit('renders the subtitleText from props to BannerTitle ', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = shallow(<ImageBanner subtitleText={subtitleText} />)
    expect(wrapper).toMatchSnapshot()
    expect(
      wrapper
        .dive()
        .find(BannerSubtitle)
        .props().children
    ).toBe(subtitleText)
  })
})
