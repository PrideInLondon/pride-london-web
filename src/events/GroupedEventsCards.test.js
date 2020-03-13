import React from 'react'
import { shallow } from 'enzyme'
import GroupedEventsCards, { generateHeader } from './GroupedEventsCards'
import { mockNodes, testEvent } from './__mocks__'

describe('The GroupedEventsCards component', () => {
  describe('Props', () => {
    const wrapper = shallow(
      <GroupedEventsCards
        prevEvent={mockNodes[0]}
        event={testEvent}
        index={1}
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
      const wrapper = shallow(
        <GroupedEventsCards
          prevEvent={mockNodes[2]}
          event={testEvent}
          index={27}
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

describe('generateHeader', () => {
  const THURSDAY = '2020-03-12T13:30+01:00'
  const FRIDAY_AM = '2020-03-13T10:45+01:00'
  const FRIDAY_PM = '2020-03-13T13:30+01:00'

  const generateMockEvent = ({ startTime, recurrenceDates }) => ({
    node: {
      startTime,
      recurrenceDates,
    },
  })

  it('should return start time of event when index is 0 and event is single', () => {
    const actual = generateHeader({
      index: 0,
      event: generateMockEvent({ startTime: FRIDAY_AM }),
    })
    expect(actual).toEqual('Friday 13 Mar')
  })

  it('should return from start time of event when index is 0 and event is recurring', () => {
    const actual = generateHeader({
      index: 0,
      event: generateMockEvent({
        startTime: FRIDAY_AM,
        recurrenceDates: ['14/03/2020'],
      }),
    })
    expect(actual).toEqual('From Friday 13 Mar')
  })

  it('should return start time of event when previous event is not same day', () => {
    const actual = generateHeader({
      index: 1,
      prevEvent: generateMockEvent({ startTime: THURSDAY }),
      event: generateMockEvent({ startTime: FRIDAY_AM }),
    })
    expect(actual).toEqual('Friday 13 Mar')
  })

  it('should return falsy when previous event is same day', () => {
    const actual = generateHeader({
      index: 1,
      prevEvent: generateMockEvent({ startTime: FRIDAY_AM }),
      event: generateMockEvent({ startTime: FRIDAY_PM }),
    })
    expect(actual).toBeFalsy()
  })

  it('should return from event start time when recurring event and previous event is not same day', () => {
    const actual = generateHeader({
      index: 1,
      prevEvent: generateMockEvent({ startTime: THURSDAY }),
      event: generateMockEvent({
        startTime: FRIDAY_PM,
        recurrenceDates: ['14/03/2020'],
      }),
    })
    expect(actual).toEqual('From Friday 13 Mar')
  })

  it('should return from event start time when recurring event and previous event is same day but single occurrence', () => {
    const actual = generateHeader({
      index: 1,
      prevEvent: generateMockEvent({ startTime: FRIDAY_AM }),
      event: generateMockEvent({
        startTime: FRIDAY_PM,
        recurrenceDates: ['14/03/2020'],
      }),
    })
    expect(actual).toEqual('From Friday 13 Mar')
  })

  it('should return event start time when single event and previous event is same day but recurring', () => {
    const actual = generateHeader({
      index: 1,
      prevEvent: generateMockEvent({
        startTime: FRIDAY_AM,
        recurrenceDates: ['14/03/2020'],
      }),
      event: generateMockEvent({
        startTime: FRIDAY_PM,
      }),
    })
    expect(actual).toEqual('Friday 13 Mar')
  })

  it('should return falsy when recurring event and previous event is same day and recurring', () => {
    const actual = generateHeader({
      index: 1,
      prevEvent: generateMockEvent({
        startTime: FRIDAY_AM,
        recurrenceDates: ['14/03/2020'],
      }),
      event: generateMockEvent({
        startTime: FRIDAY_PM,
        recurrenceDates: ['14/03/2020'],
      }),
    })
    expect(actual).toBeFalsy()
  })
})
