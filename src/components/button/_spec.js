import React from 'react'
import { shallow } from 'enzyme'
import Button from './'

describe('Button component', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper).toMatchSnapshot()
  })

  it('should fire correct method when set onClick property', () => {
    let counter = 0

    const handleClick = () => (counter += 1)

    const wrapper = shallow(<Button onClick={handleClick} />)

    wrapper.prop('onClick')()

    expect(counter).toBe(1)
  })
})
