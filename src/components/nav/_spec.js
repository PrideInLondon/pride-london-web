import React from 'react'
import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import Nav from '../nav'

describe('<Nav/>', () => {
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

  it('renders and matches snapshot', () => {
    const wrapper = shallow(<Nav />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('menu button toggles open / close', () => {
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
