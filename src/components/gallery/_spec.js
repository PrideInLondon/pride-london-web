import React from 'react'
import { shallow } from 'enzyme'
import Gallery from '.'

describe('Image', () => {
  const images = [
    {
      name: 'Test 1',
      description: 'Test 1 Description',
      originalAlt: 'test-image',
      thumbnailAlt: 'test-image',
      original: `foo`,
      thumbnail: `foo`,
    },
    {
      name: 'Test 2',
      description: null,
      originalAlt: 'test-2-image',
      thumbnailAlt: 'test-2-image',
      original: `foo`,
      thumbnail: `foo`,
    },
  ]

  it('renders when given props', () => {
    const wrapper = shallow(<Gallery images={images} />)
    expect(wrapper).toMatchSnapshot()
  })
})
