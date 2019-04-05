import React from 'react'
import { shallow } from 'enzyme'
import Image from '.'

describe(Image.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Image src={'url'} />)
    expect(wrapper).toMatchSnapshot()
  })
})
