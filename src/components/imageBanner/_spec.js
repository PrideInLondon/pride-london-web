import React from 'react'
import 'jest-styled-components'
import { shallow } from 'enzyme'

import ImageBanner from './'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'

describe('ImageBanner', () => {
  it('should render', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a <BannerTitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerTitle)).toHaveLength(1)
  })

  it('should render a <BannerSubtitle />', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find(BannerSubtitle)).toHaveLength(1)
  })

  it('should render an <img> if passed an imageSrc prop', () => {
    const wrapper = shallow(<ImageBanner imageSrc="foo" />)
    expect(wrapper.find('img')).toHaveLength(1)
  })

  it('should not render an <img> if not passed an imageSrc prop', () => {
    const wrapper = shallow(<ImageBanner />)
    expect(wrapper.find('img')).toHaveLength(0)
  })

  it('should render an img with imgSrc from props', () => {
    const imageSrc = 'http://www.image.com'
    const wrapper = shallow(<ImageBanner imageSrc={imageSrc} />)
    expect(wrapper.find('img').props().src).toBe(imageSrc)
  })

  it('should render an img with altText from props', () => {
    const altText = 'background image'
    const wrapper = shallow(<ImageBanner imageSrc="foo" altText={altText} />)
    expect(wrapper.find('img').props().alt).toBe(altText)
  })

  it('should render the titleText from props to BannerTitle ', () => {
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

  it('should render the subtitleText from props to BannerTitle ', () => {
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
