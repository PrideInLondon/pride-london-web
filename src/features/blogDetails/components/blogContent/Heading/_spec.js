import React from 'react'
import { shallow } from 'enzyme'
import Heading from '.'

describe(Heading.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Heading>somecontent</Heading>)
    expect(wrapper).toMatchSnapshot()
  })
})
