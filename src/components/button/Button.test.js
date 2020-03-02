import React from 'react'
import { shallow, mount } from 'enzyme'
import { Button } from './Button'

describe('<Button/>', () => {
  it('fires correct method when set onClick property', () => {
    let counter = 0
    const handleClick = () => (counter += 1)
    const wrapper = shallow(<Button onClick={handleClick} />)
    wrapper.prop('onClick')()
    expect(counter).toBe(1)
  })

  it('renders a gatsby link if the to prop is not http', () => {
    const wrapper = mount(<Button to="/events" />)
    expect(wrapper.find('GatsbyLink').exists()).toBeTruthy()
  })

  it('renders a normal a tag if the to prop is https', () => {
    const wrapper = mount(<Button to="https://google.com" />)
    expect(wrapper.find('a')).toBeTruthy()
    expect(wrapper.find('GatsbyLink').exists()).toBeFalsy()
  })

  it('renders a button tag if there is no to prop', () => {
    const wrapper = mount(<Button />)
    expect(wrapper.find('button')).toBeTruthy()
  })
})
