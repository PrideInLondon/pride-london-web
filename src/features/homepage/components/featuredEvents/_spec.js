import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { FeaturedEventContent } from './styles'
import FeaturedEvents from '.'
import 'jest-styled-components'

describe(FeaturedEvents.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<FeaturedEvents />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Featured Event Content', () => {
  it('renders with default values', () => {
    const wrapper = shallow(<FeaturedEventContent />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

// describe(‘Button Component’, () => {
//   it(‘renders a button element’, () => {
//     const wrapper = shallow(Button);
//     // this test is basically worthless
//     expect(wrapper).toBeA(‘button’);
//   });
