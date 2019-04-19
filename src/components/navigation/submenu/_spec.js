import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import 'jest-styled-components'
import Submenu from '.'

const mockData = {
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
  ],
  title: 'Lorem',
  url: '/ipsum',
  desc: 'lorem ipsum',
  id: 'lorem',
}

describe('<Submenu />', () => {
  const mockFunc = jest.fn()
  it('renders and matches snapshot when open', () => {
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
