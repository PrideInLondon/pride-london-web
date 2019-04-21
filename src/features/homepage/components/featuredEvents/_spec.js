import React from 'react'
import { shallow } from 'enzyme'
import { FeaturedEventContent } from './styles'
import FeaturedEvents from '.'

describe(FeaturedEvents.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<FeaturedEvents />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Featured Event Content', () => {
  it('renders with default values', () => {
    const wrapper = shallow(<FeaturedEventContent />)
    expect(wrapper).toMatchSnapshot()
  })
})

// describe(‘Button Component’, () => {
//   it(‘renders a button element’, () => {
//     const wrapper = shallow(Button);
//     // this test is basically worthless
//     expect(wrapper).toBeA(‘button’);
//   });
