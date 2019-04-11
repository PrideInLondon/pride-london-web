import React from 'react'
import { shallow } from 'enzyme'
import DonateButtonsGroup from '.'

describe(DonateButtonsGroup.name, () => {
  it('DonateButtonsGroup snapshot', () => {
    const wrapper = shallow(<DonateButtonsGroup />)
    expect(wrapper).toMatchSnapshot()
  })
})
