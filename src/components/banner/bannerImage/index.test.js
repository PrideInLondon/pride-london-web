import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import BannerTitle from '../bannerTitle'
import BannerSubtitle from '../bannerSubtitle'
import BannerImage from '.'

jest.mock('gatsby-image/withIEPolyfill', () => {
  const Img = require('gatsby-image')
  return Img
})

describe('<BannerImage />', () => {
  it('renders the component <BannerImage />', () => {
    const wrapper = shallow(<BannerImage />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('renders the component <BannerTitle />', () => {
    const wrapper = shallow(<BannerImage titleText={'Hello world'} />)
    expect(wrapper.find('StyledBannerTitle')).toHaveLength(1)
  })

  it('renders the component <BannerSubtitle />', () => {
    const wrapper = shallow(
      <BannerImage titleText={'Hello world'} subtitleText={'foobar'} />
    )
    expect(wrapper.find('StyledBannerSubtitle')).toHaveLength(1)
  })

  it('renders the component <BannerDate /> if  a date prop is passed', () => {
    const date = 'Saturday 6th July'
    const wrapper = shallow(
      <BannerImage
        titleText={'Hello world'}
        subtitleText={'foobar'}
        date={date}
      />
    )
    expect(wrapper.find('StyledBannerDate')).toHaveLength(1)
  })

  it('renders a background image on the wrapper if an imageSrc prop and imageFullWidth prop are passed', () => {
    const src = 'foo'
    const wrapper = mount(<BannerImage imageSrc={src} imageFullWidth />)
    expect(wrapper.find('styles__StyledWrapper')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  it('renders a background image on the container if an imageSrc prop is passed', () => {
    const src = 'foo'
    const wrapper = mount(
      <BannerImage
        imageSrc={src}
        titleText={'Hello world'}
        subtitleText={'foobar'}
      />
    )
    expect(wrapper.find('styles__StyledContainer')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  it('renders the titleText from props to the component BannerTitle', () => {
    const titleText = 'Here is a test title!'
    const wrapper = shallow(<BannerImage titleText={titleText} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(
      wrapper
        .dive()
        .find(BannerTitle)
        .props().children
    ).toBe(titleText)
  })

  it('renders the subtitleText from props to the component BannerSubtitle', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = shallow(
      <BannerImage titleText={'Here is a title'} subtitleText={subtitleText} />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
    expect(
      wrapper
        .dive()
        .find(BannerSubtitle)
        .props().children
    ).toBe(subtitleText)
  })

  it('renders an iframe if given a video id prop', () => {
    const wrapper = mount(
      <BannerImage
        titleText={'Here is a title'}
        subtitleText={'And here is a test subtitle!'}
        videoId="123abc"
      />
    )
    expect(wrapper.find('iframe')).toHaveLength(1)
  })
})
