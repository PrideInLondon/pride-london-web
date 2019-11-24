import React from 'react'
import { shallow } from 'enzyme'
import BlogContent from '.'

describe(BlogContent.name, () => {
  it('renders with default values', () => {
    const article = { json: {} }
    const wrapper = shallow(<BlogContent article={article} />)
    expect(wrapper).toMatchSnapshot()
  })
})
