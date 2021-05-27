import React from 'react'
import { shallow, mount } from 'enzyme'
import BannerTitle from './BannerTitle'
import BannerSubtitle from './BannerSubtitle'
import Banner from './Banner'

jest.mock('gatsby-image/withIEPolyfill', () => require('gatsby-image'))

describe('<Banner />', () => {
  it('renders the component <BannerTitle />', () => {
    const wrapper = shallow(<Banner titleText={'Hello world'} />)
    expect(wrapper.find('BannerTitle')).toHaveLength(1)
  })

  it('renders the component <BannerSubtitle />', () => {
    const wrapper = shallow(
      <Banner titleText={'Hello world'} subtitleText={'foobar'} />
    )
    expect(wrapper.find('BannerSubtitle')).toHaveLength(1)
  })

  it('renders the component <BannerDate /> if  a date prop is passed', () => {
    const date = 'Saturday 6th July'
    const wrapper = shallow(
      <Banner titleText={'Hello world'} subtitleText={'foobar'} date={date} />
    )
    expect(wrapper.find('BannerDate')).toHaveLength(1)
  })

  it('renders a background image on the wrapper if an imageSrc prop and imageFullWidth prop are passed', () => {
    const src = 'foo'
    const wrapper = mount(<Banner imageSrc={src} imageFullWidth />)
    expect(wrapper.find('Bannerstyles__StyledWrapper')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  it('renders a background image on the container if an imageSrc prop is passed', () => {
    const src = 'foo'
    const wrapper = mount(
      <Banner
        imageSrc={src}
        titleText={'Hello world'}
        subtitleText={'foobar'}
      />
    )
    expect(wrapper.find('Bannerstyles__StyledContainer')).toHaveStyleRule(
      'background-image',
      `url(${src})`
    )
  })

  it('renders the titleText from props to the component BannerTitle', () => {
    const titleText = 'Here is a test title!'
    const wrapper = shallow(<Banner titleText={titleText} />)
    expect(wrapper.dive().find(BannerTitle).props().children).toBe(titleText)
  })

  it('renders the subtitleText from props to the component BannerSubtitle', () => {
    const subtitleText = 'And here is a test subtitle!'
    const wrapper = shallow(
      <Banner titleText={'Here is a title'} subtitleText={subtitleText} />
    )
    expect(wrapper.dive().find(BannerSubtitle).props().children).toBe(
      subtitleText
    )
  })
})
