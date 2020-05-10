import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from '../components/helmet'
import { Button } from '../components/button'
import { Container, Row } from '../components/grid'
import EventsContext from '../contexts/eventsContext'
import { filterByLimit, sortByNextOccurrence } from '../events/helpers'
import constants from '../constants'
import GroupedEventsCards from './GroupedEventsCards'
import { EventsPageBanner } from './EventsPageBanner'
import {
  ColumnPagination,
  ListingCardWrapper,
  Background,
  EventCount,
} from './EventsPage.styles'

export const eventCount = (numberOfEventsToShow, eventsLength) =>
  `You're viewing ${numberOfEventsToShow} of ${eventsLength} events`

export const checkNumberOfEventsToShow = events =>
  events.length < constants.itemsToLoad - 1
    ? events.length
    : constants.itemsToLoad - 1

const EventsPage = ({
  data: {
    file: { childImageSharp },
  },
}) => {
  const events = useContext(EventsContext)

  const [numberOfEventsToShow, setNumberOfEventsToShow] = useState(
    checkNumberOfEventsToShow(events)
  )

  return (
    <>
      <Helmet
        title="Coming Out"
        description="The new way to find the best queer events for the queer community from Pride in London"
      />
      <EventsPageBanner image={childImageSharp} />
      <Background>
        <Container paddingTop={{ default: 0, md: '60px' }}>
          <Row>
            <ListingCardWrapper>
              {events
                .sort((a, b) => sortByNextOccurrence(a, b))
                .filter(filterByLimit, numberOfEventsToShow)
                .map((event, index, filteredEvents) => (
                  <GroupedEventsCards
                    prevEvent={filteredEvents[index - 1]}
                    index={index}
                    event={event}
                    key={event.node.id}
                    toLoad={numberOfEventsToShow}
                  />
                ))}
            </ListingCardWrapper>
            <ColumnPagination width={1}>
              <EventCount>
                {eventCount(numberOfEventsToShow, events.length)}
              </EventCount>
              {numberOfEventsToShow < events.length && (
                <Button
                  onClick={() => {
                    const next = numberOfEventsToShow + constants.itemsToLoad
                    setNumberOfEventsToShow(
                      next > events.length ? events.length : next
                    )
                  }}
                  disabled={numberOfEventsToShow >= events.length}
                  width={{ default: '100%', md: 'auto' }}
                  variant="outline-white"
                >
                  Show more events
                </Button>
              )}
            </ColumnPagination>
          </Row>
        </Container>
      </Background>
    </>
  )
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage
