import React from 'react'
import { shallow } from 'enzyme'
import Author from '.'

describe(Author.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Author />)
    expect(wrapper).toMatchSnapshot()
  })
})
