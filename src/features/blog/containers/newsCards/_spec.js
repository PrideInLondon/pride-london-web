import React from 'react'
import { shallow } from 'enzyme'
import NewsCards from '.'

describe(NewsCards.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<NewsCards articles={[]} />)
    expect(wrapper).toMatchSnapshot()
  })
})
