import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import NavItem from '../navItem'
import { mockData } from './_mocks'

describe('Desktop version <NavItem/>', () => {
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn(),
    }

    global.window.matchMedia = jest.fn(() => {
      return {
        matches: true,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }
    })
  })
  afterAll(() => {
    global.___loader.enqueue.mockReset()
    global.window.matchMedia.mockReset()
  })

  it('renders the desktop version of the component <NavItem />', () => {
    const wrapper = shallow(<NavItem item={mockData} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('has the aria-haspopup attribute', () => {
    const wrapper = shallow(<NavItem item={mockData} />)
    expect(
      wrapper.find('styles__SubmenuToggle').prop('aria-haspopup')
    ).toBeTruthy()
  })

  it('displays the submenu on mouseenter and hides it on mouseleave', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    wrapper.simulate('mouseEnter')
    wrapper.update()
    expect(
      wrapper.find('styles__SubmenuToggle').prop('aria-expanded')
    ).toBeTruthy()

    wrapper.simulate('mouseLeave')
    wrapper.update()
    expect(
      wrapper.find('styles__SubmenuToggle').prop('aria-expanded')
    ).toBeFalsy()
  })

  it('toggles the submenu on click', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    const SubmenuToggle = wrapper.find('styles__SubmenuToggle')
    const isOpen = SubmenuToggle.prop('aria-expanded')

    SubmenuToggle.simulate('click')
    wrapper.update()
    expect(wrapper.find('styles__SubmenuToggle').prop('aria-expanded')).toBe(
      !isOpen
    )

    SubmenuToggle.simulate('click')
    wrapper.update()
    expect(wrapper.find('styles__SubmenuToggle').prop('aria-expanded')).toBe(
      isOpen
    )
  })
})

describe('Mobile version <NavItem/>', () => {
  beforeAll(() => {
    global.___loader = {
      enqueue: jest.fn(),
    }

    global.window.matchMedia = jest.fn(() => {
      return {
        matches: false,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      }
    })
  })
  afterAll(() => {
    global.___loader.enqueue.mockReset()
    global.window.matchMedia.mockReset()
  })

  it('renders the mobile version of the component <NavItem />', () => {
    const wrapper = shallow(<NavItem item={mockData} />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('has not the aria-haspopup attribute', () => {
    const wrapper = shallow(<NavItem item={mockData} />)
    expect(
      wrapper.find('styles__SubmenuToggle').prop('aria-haspopup')
    ).toBeFalsy()
  })

  it('does not open/close on mouseenter or mouseleave', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    const isOpen = wrapper.find('styles__SubmenuToggle').prop('aria-expanded')
    wrapper.simulate('mouseEnter')
    wrapper.update()
    expect(wrapper.find('styles__SubmenuToggle').prop('aria-expanded')).toBe(
      isOpen
    )

    wrapper.simulate('mouseLeave')
    wrapper.update()
    expect(wrapper.find('styles__SubmenuToggle').prop('aria-expanded')).toBe(
      isOpen
    )
  })

  it('toggles the submenu on click', () => {
    const wrapper = mount(<NavItem item={mockData} />)
    const SubmenuToggle = wrapper.find('styles__SubmenuToggle')
    const isOpen = SubmenuToggle.prop('aria-expanded')

    SubmenuToggle.simulate('click')
    wrapper.update()
    expect(wrapper.find('styles__SubmenuToggle').prop('aria-expanded')).toBe(
      !isOpen
    )

    SubmenuToggle.simulate('click')
    wrapper.update()
    expect(wrapper.find('styles__SubmenuToggle').prop('aria-expanded')).toBe(
      isOpen
    )
  })
})
