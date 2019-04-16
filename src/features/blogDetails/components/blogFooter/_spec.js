import React from 'react'
import { shallow } from 'enzyme'
import BlogFooter from '.'

describe(BlogFooter.name, () => {
  it('renders with default values', () => {
    const author = {}
    const wrapper = shallow(<BlogFooter author={author} />)
    expect(wrapper).toMatchSnapshot()
  })
})
