import React from 'react'
import { shallow } from 'enzyme'
import Navigation from '../index'

describe('Navigation', () => {
  it('matches snapshot', () => {
    const wrappedComponent = shallow(<Navigation />)
    expect(wrappedComponent).toMatchSnapshot()
  })

  it('presents one header', () => {
    const wrappedComponent = shallow(<Navigation />)
    expect(wrappedComponent.find('Header')).toHaveLength(1)
  })
})
