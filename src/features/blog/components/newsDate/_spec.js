import React from 'react'
import { shallow } from 'enzyme'
import NewsDate from '.'

describe(NewsDate.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<NewsDate date="2019-03-28T20:30+00:00" />)
    expect(wrapper).toMatchSnapshot()
  })
})
