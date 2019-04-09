import React from 'react'
import { shallow } from 'enzyme'
import Hr from '.'

describe(Hr.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<Hr />)
    expect(wrapper).toMatchSnapshot()
  })
})
