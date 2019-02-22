import React from 'react'
import { shallow } from 'enzyme'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import ImageBanner from './'
import 'jest-styled-components'

describe('ImageBanner', () => {
  it('renders', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(
      wrapper
        .find(BannerTitle))
      .toHaveLength(1)
  })

  it('renders a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(
      wrapper
        .find(BannerSubtitle))
      .toHaveLength(1)
  })

  it('renders an img if passed an imageSrc prop', () => {
    const wrapper = shallow(<ImageBanner imageSrc="foo" />)
    expect(
      wrapper.
        find('img'))
      .toHaveLength(1)
  })

  it('renders render an img if not passed an imageSrc prop', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(
      wrapper
        .find('img'))
      .toHaveLength(0)
  })

  it('renders an img with imgSrc from props', () => {
    const imageSrc = 'https://www.image.com'
    const wrapper = shallow(<ImageBanner imageSrc={imageSrc} />)
    expect(
      wrapper
        .find('img')
        .props()
        .src)
      .toBe(imageSrc)
  })

  it('renders an img with altText from props', () => {
    const altText = 'background image'
    const wrapper = shallow(<ImageBanner imageSrc="foo" altText={altText} />)
    expect(
      wrapper
        .find('img')
        .props()
        .alt)
      .toBe(altText)
  })

  it('renders the titleText from props to BannerTitle ', () => {
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

  it('renders the subtitleText from props to BannerTitle ', () => {
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
