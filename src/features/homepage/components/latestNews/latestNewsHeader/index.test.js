import React from 'react'
import { shallow } from 'enzyme'
import LatestNewsHeader from '.'

describe(LatestNewsHeader.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<LatestNewsHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
