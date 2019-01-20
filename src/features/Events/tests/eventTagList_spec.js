import React from 'react'
import { shallow } from 'enzyme'
import EventTagList from '../Components/eventTagList'

describe('The EventTag component', () => {
  it('renders', () => {
    const wrapper = shallow(
      <EventTagList values={['Bananas', 'Golf', 'Shoe Spoons']} />
    )

    expect(
      wrapper
        .children()
        .at(0)
        .children()
        .text()
    ).toBe('Bananas')
    expect(
      wrapper
        .children()
        .at(1)
        .children()
        .text()
    ).toBe('Golf')
    expect(
      wrapper
        .children()
        .at(2)
        .children()
        .text()
    ).toBe('Shoe Spoons')
    expect(wrapper.children()).toHaveLength(3)
  })
})
