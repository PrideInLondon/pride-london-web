import React from 'react'
import { shallow } from 'enzyme'
import OtherArticlesHeader from '.'

describe(OtherArticlesHeader.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<OtherArticlesHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
