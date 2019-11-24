import React from 'react'
import { shallow } from 'enzyme'
import Quote from '.'

describe(Quote.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Quote>some quote</Quote>)
    expect(wrapper).toMatchSnapshot()
  })
})
