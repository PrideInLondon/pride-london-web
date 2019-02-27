import React from 'react'
import { shallow } from 'enzyme'
import NewsCard from './'

describe(NewsCard.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<NewsCard />)
    expect(wrapper).toMatchSnapshot()
  })
})
