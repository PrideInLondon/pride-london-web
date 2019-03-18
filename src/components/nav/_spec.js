import React from 'react'
import { shallow, mount } from 'enzyme'
import Nav from '../nav'
import NavItem from '../navItem'
import Submenu from '../submenu'
import 'jest-styled-components'
import toJSON from 'enzyme-to-json'

// // SVGs need to be mocked as the SVG output causes Babel to throw
// jest.mock('../../theme/assets/images/logo-pride.svg', () => 'logo')
// jest.mock('../../theme/assets/images/logo-pride.svg', () => 'logo')
// jest.mock('../../theme/assets/images/logo-pride.svg', () => 'logo')

// window.matchMedia = window.matchMedia || function() {
//     return {
//         matches : false,
//         addListener : function() {},
//         removeListener: function() {}
//     };
// };

describe('<Nav/>', () => {
    beforeAll(() => {
        global.___loader = {
          enqueue: jest.fn(),
        }

        global.window.matchMedia = jest.fn(() => { 
            return { 
                matches: false, 
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
        const wrapper = mount(<Nav />)
        console.log(wrapper.debug())
        // console.log("BUTTON",wrapper.find('button').debug())

        expect(toJSON(wrapper)).toMatchSnapshot()
    })
})