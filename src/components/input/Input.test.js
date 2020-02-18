import React from 'react'
import { shallow, mount } from 'enzyme'

import Input from './Input'

describe('<Input/>', () => {
  it('should invoke onChange when triggered', () => {
    const onChangeSpy = jest.fn()
    const component = mount(<Input onChange={onChangeSpy} />)
    component.find('input').simulate('change')
    expect(onChangeSpy).toHaveBeenCalledTimes(1)
  })

  it('should change label focused prop on focus and blur of input', () => {
    const component = shallow(<Input />)

    component.find('Inputstyles__StyledInput').simulate('focus')
    expect(component.find('Inputstyles__Label').props().focused).toBe(true)

    component.find('Inputstyles__StyledInput').simulate('blur')
    expect(component.find('Inputstyles__Label').props().focused).toBe(false)
  })
})
