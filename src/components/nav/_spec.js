import React from 'react'
import { shallow } from 'enzyme'
// import Nav from '../nav'
// import NavItem from '../navItem'
// import Submenu from '../submenu'
import 'jest-styled-components'

// // SVGs need to be mocked as the SVG output causes Babel to throw
// jest.mock('../../theme/assets/images/logo-pride.svg', () => 'logo')
// jest.mock('../../theme/assets/images/logo-pride.svg', () => 'logo')
// jest.mock('../../theme/assets/images/logo-pride.svg', () => 'logo')

describe('<Nav/>', () => {
    it('renders and matches snapshot', () => {
        const wrapper = shallow(<Nav />)
        console.log(wrapper.debug())
        expect(wrapper).toMatchSnapshot()
      })
})