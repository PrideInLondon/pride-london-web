import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import { mockData } from '../../_mocks'
import GalleryGrid from './index'

describe('<Gallery/>', () => {
  it('should render and match snapshot', () => {
    const handleClick = jest.fn()
    const wrapper = shallow(
      <GalleryGrid
        images={mockData}
        activeIndex={0}
        onPhotoClick={handleClick}
      />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('it should call function on photo click', () => {
    const handleClick = jest.fn()
    const wrapper = mount(
      <GalleryGrid
        images={mockData}
        activeIndex={0}
        onPhotoClick={handleClick}
      />
    )

    expect(handleClick).not.toHaveBeenCalled()

    wrapper
      .find('styles__Thumbnail')
      .first()
      .simulate('click')

    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
