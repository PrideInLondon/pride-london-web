import React from 'react'
import { shallow } from 'enzyme'
import LatestNewsContainer from '.'

describe(LatestNewsContainer.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<LatestNewsContainer />)
    expect(wrapper).toMatchSnapshot()
  })
})
