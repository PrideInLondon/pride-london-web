import React from 'react'
import { shallow } from 'enzyme'
import Image from '.'

describe('Image', () => {
  it('renders when given props', () => {
    const wrapper = shallow(
      <Image
        width={100}
        height={100}
        altText="test image"
        src="foo.bar/image"
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

