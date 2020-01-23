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

  it('should have correct id, required, type props and display label', () => {
    const id = 'InputId'
    const label = 'Input field'
    const type = 'text'
    const component = mount(
      <Input id={id} label={label} type={type} required />
    )
    expect(component.find('input').prop('id')).toBe(id)
    expect(component.find('input').prop('required')).toBe(true)
    expect(component.find('input').prop('type')).toBe(type)
    expect(component.find('label').text()).toBe(label)
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
