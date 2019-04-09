import React from 'react'
import { shallow } from 'enzyme'
import Arrow from '.'

describe(Arrow.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Arrow>></Arrow>)
    expect(wrapper).toMatchSnapshot()
  })
})
