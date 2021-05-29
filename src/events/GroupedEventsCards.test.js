import React from 'react'
import { shallow } from 'enzyme'
import { render } from '@testing-library/react'
import GroupedEventsCards, { generateHeader } from './GroupedEventsCards'
import { mockNodes, testEvent } from './__mocks__'

describe('GroupedEventsCards', () => {
  describe('props', () => {
    const wrapper = shallow(
      <GroupedEventsCards
        prevEvent={mockNodes[0]}
        event={testEvent}
        index={1}
        toLoad={24}
      />
    )
    it('passing event.node correctly', () => {
      expect(wrapper.find('EventListingCard').first().prop('event')).toBe(
        testEvent.node
      )
    })

    it('testing animation logic', () => {
      expect(wrapper.find('Wrapper').first().prop('animation')).toBe(false)
    })
  })

  describe('animations', () => {
    it('testing animation logic', () => {
      const wrapper = shallow(
        <GroupedEventsCards
          prevEvent={mockNodes[2]}
          event={testEvent}
          index={27}
          toLoad={27}
        />
      )
      expect(wrapper.find('Wrapper').first().prop('animation')).toBe(true)
    })
  })

  describe('event listing promo card', () => {
    it('should render EventListingPromotionCard at index 3', () => {
      const { findByText } = render(
        <GroupedEventsCards
          event={testEvent}
          index={3}
          prevEvent={mockNodes[2]}
          toLoad={24}
        />
      )
      expect(findByText('List your event')).toBeTruthy()
    })
  })
})

describe('generateHeader', () => {
  const THURSDAY = '2020-03-12T13:30:00.000Z'
  const FRIDAY_AM = '2020-03-13T10:45:00.000Z'
  const FRIDAY_PM = '2020-03-13T13:30:00.000Z'

  const SINGLE_DATE = 'Friday 13 Mar'
  const RECURRING_DATE = 'From Friday 13 Mar'

  const generateMockEvent = ({ startDate, recurring }) => ({
    node: {
      date: {
        dates: [
          { startDate },
          ...(recurring ? [{ startDate: '2020-03-14T09:00+01:00' }] : []),
        ],
      },
    },
  })

  it.each`
    prevEvent                                    | event                                        | expected
    ${null}                                      | ${{ startDate: FRIDAY_AM }}                  | ${SINGLE_DATE}
    ${null}                                      | ${{ startDate: FRIDAY_AM, recurring: true }} | ${RECURRING_DATE}
    ${{ startDate: THURSDAY }}                   | ${{ startDate: FRIDAY_AM }}                  | ${SINGLE_DATE}
    ${{ startDate: THURSDAY }}                   | ${{ startDate: FRIDAY_AM, recurring: true }} | ${RECURRING_DATE}
    ${{ startDate: THURSDAY, recurring: true }}  | ${{ startDate: FRIDAY_PM }}                  | ${SINGLE_DATE}
    ${{ startDate: THURSDAY, recurring: true }}  | ${{ startDate: FRIDAY_PM, recurring: true }} | ${RECURRING_DATE}
    ${{ startDate: FRIDAY_AM }}                  | ${{ startDate: FRIDAY_PM }}                  | ${null}
    ${{ startDate: FRIDAY_AM }}                  | ${{ startDate: FRIDAY_PM, recurring: true }} | ${RECURRING_DATE}
    ${{ startDate: FRIDAY_AM, recurring: true }} | ${{ startDate: FRIDAY_PM }}                  | ${SINGLE_DATE}
    ${{ startDate: FRIDAY_AM, recurring: true }} | ${{ startDate: FRIDAY_PM, recurring: true }} | ${null}
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
