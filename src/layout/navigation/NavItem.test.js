import React from 'react'
import { shallow, mount } from 'enzyme'
import NavItem from './NavItem'
import { mockData } from './__mocks__'

describe('Desktop version <NavItem/>', () => {
  const globalMatchMediaMock = global.window.matchMedia

  beforeAll(() => {
    global.window.matchMedia = jest.fn(() => {
      return {
        matches: true,
      }
    })
  })

  afterAll(() => {
    global.window.matchMedia = globalMatchMediaMock
  })

  it('has the aria-haspopup attribute', () => {
    const wrapper = shallow(<NavItem item={mockData} />)
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-haspopup')
    ).toBeTruthy()
  })

  it('displays the submenu on mouseenter and hides it on mouseleave', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    wrapper.simulate('mouseEnter')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBeTruthy()

    wrapper.simulate('mouseLeave')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBeFalsy()
  })

  it('toggles the submenu on click', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    const SubMenuToggle = wrapper.find('NavItemstyles__SubMenuToggle')
    const isOpen = SubMenuToggle.prop('aria-expanded')

    SubMenuToggle.simulate('click')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBe(!isOpen)

    SubMenuToggle.simulate('click')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBe(isOpen)
  })
})

describe('Mobile version <NavItem/>', () => {
  it('has not the aria-haspopup attribute', () => {
    const wrapper = shallow(<NavItem item={mockData} />)
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-haspopup')
    ).toBeFalsy()
  })

  it('does not open/close on mouseenter or mouseleave', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    const isOpen = wrapper
      .find('NavItemstyles__SubMenuToggle')
      .prop('aria-expanded')
    wrapper.simulate('mouseEnter')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBe(isOpen)

    wrapper.simulate('mouseLeave')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBe(isOpen)
  })

  it('toggles the submenu on click', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    const SubMenuToggle = wrapper.find('NavItemstyles__SubMenuToggle')
    const isOpen = SubMenuToggle.prop('aria-expanded')

    SubMenuToggle.simulate('click')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBe(!isOpen)

    SubMenuToggle.simulate('click')
    wrapper.update()
    expect(
      wrapper.find('NavItemstyles__SubMenuToggle').prop('aria-expanded')
    ).toBe(isOpen)
  })
})
