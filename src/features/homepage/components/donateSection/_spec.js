import React from 'react'
import { shallow } from 'enzyme'
import DonateSection from '.'

describe(DonateSection.name, () => {
  it('volunteer snapshot', () => {
    const wrapper = shallow(<DonateSection />)
    expect(wrapper).toMatchSnapshot()
  })
})
