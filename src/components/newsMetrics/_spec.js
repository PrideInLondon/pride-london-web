import React from 'react'
import { shallow } from 'enzyme'
import NewsMetrics from '.'

describe(NewsMetrics.name, () => {
  it('renders with default values', () => {
    const datePublished = '2019-03-28T20:30+00:00'
    const wrapper = shallow(<NewsMetrics datePublished={datePublished} />)
    expect(wrapper).toMatchSnapshot()
  })
})
