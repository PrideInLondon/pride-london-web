import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import Nav from '.'

describe('<Nav/>', () => {
  it('renders the component <Nav />', () => {
    const wrapper = shallow(<Nav />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('toggles open / close the menu button', () => {
    const wrapper = mount(<Nav />)
    const menuToggle = wrapper.find('button[aria-controls="menu"]')
    const isOpen = wrapper
      .find('button[aria-controls="menu"]')
      .prop('aria-expanded')

    menuToggle.simulate('click')
    wrapper.update()
    expect(
      wrapper.find('button[aria-controls="menu"]').prop('aria-expanded')
    ).toBe(!isOpen)

    menuToggle.simulate('click')
    wrapper.update()
    expect(
      wrapper.find('button[aria-controls="menu"]').prop('aria-expanded')
    ).toBe(isOpen)
  })
})
