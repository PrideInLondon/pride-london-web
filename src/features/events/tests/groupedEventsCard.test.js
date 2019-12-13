import React from 'react'
import { shallow } from 'enzyme'
import { GroupedEventsCards } from '../index'
import { mockNodes, testEvent } from './__mocks__'
import 'jest-styled-components'

// will change in EVE-7
describe('The GroupedEventsCards component', () => {
  let wrapper

  beforeAll(() => {
    wrapper = shallow(
      <GroupedEventsCards
        event={testEvent}
        index={1}
        events={mockNodes}
        toLoad={24}
      />
    )
  })

  it('Snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('Render', () => {
    it('passing event.node correctly', () => {
      expect(
        wrapper
          .find('EventListingCard')
          .first()
          .prop('event')
      ).toBe(testEvent.node)
    })

    it('testing animation logic', () => {
      expect(
        wrapper
          .find('FlexColumn')
          .first()
          .prop('animation')
      ).toBe(false)
    })
    it('testing animation logic', () => {
      const extendedMockNodes = new Array(25)
      wrapper = shallow(
        <GroupedEventsCards
          event={testEvent}
          index={27}
          events={[...extendedMockNodes, ...mockNodes]}
          toLoad={27}
        />
      )

      expect(
        wrapper
          .find('FlexColumn')
          .first()
          .prop('animation')
      ).toBe(true)
    })
  })
})
