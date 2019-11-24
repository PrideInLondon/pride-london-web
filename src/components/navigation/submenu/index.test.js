import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import Submenu from '../submenu'
import { mockData } from './__mocks__'

describe('<Submenu />', () => {
  const mockFunc = jest.fn()
  it('renders the component <Submenu /> when opened', () => {
    const wrapper = shallow(
      <Submenu
        item={mockData}
        isOpen
        setNavOpen={mockFunc}
        setNavItemOpen={mockFunc}
      />
    )
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
