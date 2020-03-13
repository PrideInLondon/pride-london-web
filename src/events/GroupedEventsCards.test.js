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

  const SINGLE_DATE = 'Friday 13 Mar'
  const RECURRING_DATE = 'From Friday 13 Mar'

  const generateMockEvent = ({ startTime, recurring }) => ({
    node: {
      startTime,
      recurrenceDates: recurring && ['14/03/2020'],
    },
  })

  it.each`
    prevEvent                                    | event                                        | expected
    ${null}                                      | ${{ startTime: FRIDAY_AM }}                  | ${SINGLE_DATE}
    ${null}                                      | ${{ startTime: FRIDAY_AM, recurring: true }} | ${RECURRING_DATE}
    ${{ startTime: THURSDAY }}                   | ${{ startTime: FRIDAY_AM }}                  | ${SINGLE_DATE}
    ${{ startTime: THURSDAY }}                   | ${{ startTime: FRIDAY_AM, recurring: true }} | ${RECURRING_DATE}
    ${{ startTime: THURSDAY, recurring: true }}  | ${{ startTime: FRIDAY_PM }}                  | ${SINGLE_DATE}
    ${{ startTime: THURSDAY, recurring: true }}  | ${{ startTime: FRIDAY_PM, recurring: true }} | ${RECURRING_DATE}
    ${{ startTime: FRIDAY_AM }}                  | ${{ startTime: FRIDAY_PM }}                  | ${null}
    ${{ startTime: FRIDAY_AM }}                  | ${{ startTime: FRIDAY_PM, recurring: true }} | ${RECURRING_DATE}
    ${{ startTime: FRIDAY_AM, recurring: true }} | ${{ startTime: FRIDAY_PM }}                  | ${SINGLE_DATE}
    ${{ startTime: FRIDAY_AM, recurring: true }} | ${{ startTime: FRIDAY_PM, recurring: true }} | ${null}
  `(
    'should return $expected when prev event is $prevEvent, event is $event',
    ({ prevEvent, event, expected }) => {
      const actual = generateHeader({
        prevEvent: prevEvent && generateMockEvent(prevEvent),
        event: generateMockEvent(event),
      })
      expect(actual).toEqual(expected)
    }
  )
})
