import React from 'react'
import { mount } from 'enzyme'
import Navigation from './Navigation'

describe('<Navigation/>', () => {
  it('toggles open / close the menu button', () => {
    const wrapper = mount(
      <Navigation backgroundColor="pink" logoUrl="/test.svg" />
    )
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
