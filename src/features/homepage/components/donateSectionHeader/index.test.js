import React from 'react'
import { shallow } from 'enzyme'
import DonateSectionHeader from '.'

describe(DonateSectionHeader.name, () => {
  it('volunteer snapshot', () => {
    const wrapper = shallow(<DonateSectionHeader />)
    expect(wrapper).toMatchSnapshot()
  })
})
