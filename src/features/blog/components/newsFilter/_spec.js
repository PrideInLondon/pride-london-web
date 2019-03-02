import React from 'react'
import { shallow } from 'enzyme'
import NewsFilter from './'

describe(NewsFilter.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<NewsFilter filterType="ALL_ARTICLES" />)
    expect(wrapper).toMatchSnapshot()
  })

  // TODO: Add more tests for different filter types?
})
