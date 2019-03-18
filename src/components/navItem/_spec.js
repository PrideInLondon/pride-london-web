import React from 'react'
import { shallow, mount } from 'enzyme'
import NavItem from '../navItem'
import 'jest-styled-components'
import toJSON from 'enzyme-to-json'

const mockData = {
    id: 'nav-learn',
    title: 'Learn',
    desc:
      'Cupcake ipsum dolor sit. Amet dragée chocolate donut. Jelly-o chupa chups liquorice chocolate.',
    url: '/',
    submenu: [
      {
        heading: 'Jelly-o chupa chups',
        links: [
          { title: 'Cupcake ipsum dolor sit', url: '/' },
          { title: 'Cupcake ipsum sit', url: '/' },
          { title: 'Cupcake dolor sit', url: '/' },
          { title: 'Cupcake ipsum dolor', url: '/' },
        ],
      },
      {
        heading: 'Icing gummi bears powder',
        links: [
          { title: 'Amet dragée donut', url: '/' },
          { title: 'Amet dragée chocolate donut', url: '/' },
        ],
      },
      {
        heading: 'Bear claw pastry bonbon',
        links: [
          { title: 'Carrot cake fruitcake', url: '/' },
          { title: 'Carrot cake muffin fruitcake', url: '/' },
        ],
      },
    ],
}

// Tests for Desktop version of Nav
describe('Desktop <NavItem/>', () => {
    beforeAll(() => {
        global.___loader = {
          enqueue: jest.fn(),
        }

        global.window.matchMedia = jest.fn(() => { 
            return { 
                matches: true, 
                addListener: jest.fn(), 
                removeListener: jest.fn() 
            } 
        })
    })
    afterAll(() => {
        global.___loader.enqueue.mockReset()
        global.window.matchMedia.mockReset()
    })

    it('renders and matches snapshot', () => {
        const wrapper = shallow(<NavItem item={mockData} />)
        expect(toJSON(wrapper)).toMatchSnapshot()
    })

    it('Should display the submenu on mouseenter and hide it on mouseleave', () => {
        const wrapper = mount(<NavItem item={mockData} />)
        wrapper.simulate('mouseEnter')
        wrapper.update();
        expect(wrapper.find('navItem__SubmenuToggle').prop('aria-expanded')).toBeTruthy()

        wrapper.simulate('mouseLeave')
        wrapper.update();
        expect(wrapper.find('navItem__SubmenuToggle').prop('aria-expanded')).toBeFalsy()
    })

    it('Should toggle the submenu on click', () => {
        const wrapper = mount(<NavItem item={mockData} />)
        const SubmenuToggle = wrapper.find('navItem__SubmenuToggle')
        const isOpen = SubmenuToggle.prop('aria-expanded')

        SubmenuToggle.simulate('click')
        wrapper.update();
        expect(wrapper.find('navItem__SubmenuToggle').prop('aria-expanded')).toBe(!isOpen)

        SubmenuToggle.simulate('click')
        wrapper.update();
        expect(wrapper.find('navItem__SubmenuToggle').prop('aria-expanded')).toBe(isOpen)
    })

})