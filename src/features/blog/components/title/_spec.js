import React from 'react'
import { shallow } from 'enzyme'
import Title from './'

describe(Title.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Title>Hi</Title>)
    expect(wrapper).toMatchSnapshot()
  })
})
