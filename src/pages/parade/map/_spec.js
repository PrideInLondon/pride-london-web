import React from 'react'
import { shallow } from 'enzyme'
import ParadeMap from '.'

describe(ParadeMap.name, () => {
  it('render correctly', () => {
    const wrapper = shallow(<ParadeMap />)
    expect(wrapper).toMatchSnapshot()
  })
})
