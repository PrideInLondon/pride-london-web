import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import GalleryImage from './index'

describe('<Gallery/>', () => {
  it('should render and match snapshot', () => {
    const wrapper = shallow(
      <GalleryImage photoIndex={1} totalPhotos={2} original="foo" />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('it should open full screen', () => {
    const wrapper = mount(
      <GalleryImage photoIndex={1} totalPhotos={2} original="foo" />
    )
    wrapper
      .find('styles__FullScreenButton')
      .first()
      .simulate('click')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
