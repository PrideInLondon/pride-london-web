import React from 'react'
import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { FeaturedEventContent } from './styles'
import { mockEvents } from './__mocks__'
import FeaturedEvents from '.'
import 'jest-styled-components'

describe(FeaturedEvents.name, () => {
  it('renders with default values', () => {
    const wrapper = shallow(<FeaturedEvents events={mockEvents} />)
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Featured Event Content', () => {
  it('renders with default values', () => {
    const wrapper = shallow(<FeaturedEventContent />)
    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})
