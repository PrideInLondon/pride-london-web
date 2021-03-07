import React from 'react'
import { render } from '@testing-library/react'
import { CustomNodeJsGlobal } from '../../.jest/jest.setup'
import GroupedEventsCards, { generateHeader } from './GroupedEventsCards'
import { mockNodes, testEvent } from './__mocks__'
import { generateEventSlug } from './helpers'

declare const global: CustomNodeJsGlobal

describe('GroupedEventsCards', () => {
  beforeAll(() => {
    delete global.window.___navigate
    global.window.___navigate = jest.fn()
  })

  it('should navigate on click of card elements', () => {
    const { getByAltText, getByText } = render(
      <GroupedEventsCards
        event={testEvent}
        index={3}
        prevEvent={mockNodes[2]}
        toLoad={24}
      />
    )
    const elements = [
      // image
      getByAltText(testEvent.node.eventsListPicture.title),
      // heading
      getByText(testEvent.node.name),
    ]
    elements.forEach(element => {
      expect(element).toBeInTheDocument()
      // should navigate on click
      element.click()
      expect(global.window.___navigate.mock.calls[0][0]).toBe(
        generateEventSlug(testEvent.node)
      )
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

  const generateMockEvent = ({
    startDate,
    recurring,
  }: {
    startDate: string
    recurring: boolean
  }) => ({
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
