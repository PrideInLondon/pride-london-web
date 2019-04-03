import React from 'react'
import { shallow } from 'enzyme'
import VolunteerBoxInfo from '.'

describe(VolunteerBoxInfo.name, () => {
  it('volunteer snapshot', () => {
    const wrapper = shallow(<VolunteerBoxInfo />)
    expect(wrapper).toMatchSnapshot()
  })
})
