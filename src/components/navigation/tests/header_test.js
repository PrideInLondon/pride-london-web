import React from 'react'
import { shallow } from 'enzyme'
import Header from '../header'

describe('header', () => {
  it('matches snapshot', () => {
    const wrappedComponent = shallow(<Header />)
    expect(wrappedComponent).toMatchSnapshot()
  })
  it('presents one navitem', () => {
    const wrappedComponent = shallow(<Header />)
    expect(wrappedComponent.find('TestNav')).toHaveLength(1)
  })
})
