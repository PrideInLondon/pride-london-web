import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow, mount } from 'enzyme'

import Input from './Input'

describe('<Input/>', () => {
  it('matches snapshot', () => {
    const id = 'InputId'
    const label = 'Input field'
    const type = 'text'
    const required = true
    const component = shallow(
      <Input id={id} label={label} type={type} required={required} />
    )
    expect(toJSON(component)).toMatchSnapshot()
    expect(component.find('Inputstyles__StyledInput').prop('id')).toBe(id)
    expect(component.find('Inputstyles__StyledInput').prop('required')).toBe(
      required
    )
    expect(component.find('Inputstyles__StyledInput').prop('type')).toBe(type)
    expect(component.find('Inputstyles__Label').text()).toBe(label)
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
