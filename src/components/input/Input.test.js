import React from 'react'
import { shallow, mount } from 'enzyme'

import Input from './Input'

describe('<Input/>', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(<Input />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should invoke onChange when triggered', () => {
    const onChangeSpy = jest.fn()
    const component = mount(<Input onChange={onChangeSpy} />)
    component.find('input').simulate('change')
    expect(onChangeSpy).toHaveBeenCalledTimes(1)
  })

  it('should change label focused prop on focus and blur of input', () => {
    const id = 'InputId'
    const label = 'Input field'
    const type = 'text'
    const component = shallow(
      <Input label={label} type={type} id={id} required />
    )

    component.find('Inputstyles__StyledInput').simulate('focus')
    expect(component.find('Inputstyles__Label').props().focused).toBe(true)

    component.find('Inputstyles__StyledInput').simulate('blur')
    expect(component.find('Inputstyles__Label').props().focused).toBe(false)
  })
})
