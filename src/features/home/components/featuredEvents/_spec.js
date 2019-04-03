import React from 'react'
import { shallow } from 'enzyme'
import EventCards from '.'

describe(EventCards.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<EventCards />)
    expect(wrapper).toMatchSnapshot()
  })
})
