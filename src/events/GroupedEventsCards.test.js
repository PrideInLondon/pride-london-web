import React from 'react'
import { shallow } from 'enzyme'
import GroupedEventsCards from './GroupedEventsCards'
import { mockNodes, testEvent } from './__mocks__'

describe('The GroupedEventsCards component', () => {
  describe('Props', () => {
    const wrapper = shallow(
      <GroupedEventsCards
        event={testEvent}
        index={1}
        events={mockNodes}
        toLoad={24}
      />
    )
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
          .find('Wrapper')
          .first()
          .prop('animation')
      ).toBe(false)
    })
  })

  describe('Animation Logic', () => {
    it('testing animation logic', () => {
      const extendedMockNodes = new Array(25)
      const wrapper = shallow(
        <GroupedEventsCards
          event={testEvent}
          index={27}
          events={[...extendedMockNodes, ...mockNodes]}
          toLoad={27}
        />
      )
      expect(
        wrapper
          .find('Wrapper')
          .first()
          .prop('animation')
      ).toBe(true)
    })
  })
})
