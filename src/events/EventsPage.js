import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from '../components/helmet'
import { Button } from '../components/button'
import { colors } from '../theme/colors'
import { Container, Row } from '../components/grid'
import EventsContext from '../contexts/eventsContext'
import constants from '../constants'
import { filterByLimit, sortByNextOccurrence } from './helpers'
import GroupedEventsCards from './GroupedEventsCards'
import { EventsPageBanner } from './EventsPageBanner'
import {
  BackgroundContainer,
  ColumnPagination,
  EventCount,
  ListingCardWrapper,
} from './EventsPage.styles'

export const eventCount = (numberOfEventsToShow, eventsLength) =>
  `You're viewing ${numberOfEventsToShow} of ${eventsLength} events`

export const checkNumberOfEventsToShow = (events) =>
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
    <BackgroundContainer>
      <Helmet
        title="Pride Festival"
        description="A month of curated LGBT+ events"
      />
      <EventsPageBanner
        image={childImageSharp}
        title="Pride Festival"
        subtitle="A month of curated events for LGBT+ communities"
        backgroundColor={colors.electricPurple}
      >
        <Button
          to="/events/festival"
          style={{ marginTop: '25px' }}
          variant="secondary"
        >
          About
        </Button>
      </EventsPageBanner>

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
    </BackgroundContainer>
  )
}

/*
<Banner
        titleText="Pride Festival"
        subtitleText="A month of curated events for LGBT+ communities"
        fixed={childImageSharp}
        color={colors.bondiBlue}
      
      />
         <InsetContainer>
        <ExplainerContainer>Explainer<br />Explainer <br/>Explainer</ExplainerContainer>
      </InsetContainer>
      */

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage
