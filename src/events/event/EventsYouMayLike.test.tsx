import React from 'react'

import { events } from '../__mocks__/contentful_events'
import { eventsTestRender } from '../../contexts/eventsContextTestingUtils'
import { filterPastEvents, sortEventsByStartTime } from '../helpers'
import EventsYouMayLike, { filterNextThreeEvents } from './EventsYouMayLike'
import { ContentfulEventNode } from './EventPride.types'

describe('EventsYouMayLike', () => {
  it('should display expected events', () => {
    const [eventToDisplayFrom] = events

    // provide events in context
    const { queryByAltText, queryAllByAltText } = eventsTestRender(
      <EventsYouMayLike eventId={eventToDisplayFrom.node.id} />,
      {
        eventsProviderProps: {
          value: events
            .filter(event => {
              const lastOccurenceEndDate =
                event.node.date.dates[event.node.date.dates.length - 1].endDate
              return filterPastEvents(lastOccurenceEndDate)
            })
            .sort(sortEventsByStartTime),
        },
      }
    )

    // currently selected event is not displayed
    expect(
      queryAllByAltText(eventToDisplayFrom.node.eventsListPicture.title)
    ).toEqual([])

    // next events are displayed
    filterNextThreeEvents(events, eventToDisplayFrom.node.id).forEach(
      (event: ContentfulEventNode) => {
        expect(
          queryByAltText(event.node.eventsListPicture.title)
        ).toBeInTheDocument()
      }
    )
  })
})
