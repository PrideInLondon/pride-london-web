import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from '../components/helmet'
import { colors } from '../theme/colors'
import { Button } from '../components/button'
import { Container, Row } from '../components/grid'
import { AppContext } from '../appContext'
import { filterByLimit } from '../events/helpers'
import GroupedEventsCards from './GroupedEventsCards'
import { EventsPageBanner } from './EventsPageBanner'
import {
  ColumnPagination,
  ListingCardWrapper,
  Background,
  EventCount,
} from './EventsPage.styles'

const EventsPage = ({
  data: {
    diageo,
    file: { childImageSharp },
  },
}) => {
  const context = useContext(AppContext)
  return (
    <>
      <Helmet
        title="Coming Out"
        description="The new way to find the best queer events for the queer community from Pride in London"
      />
      <EventsPageBanner
        title="Coming Out"
        subtitle=" The new way to find the best queer events for the queer community from Pride in London."
        backgroundColor={colors.mexicanPink}
        image={childImageSharp}
        sponsor={diageo.childImageSharp}
      />
      <Background>
        <Container paddingTop={{ default: 0, md: '60px' }}>
          <Row>
            <ListingCardWrapper>
              {context.state.events
                .filter(filterByLimit, context.state.eventsToShow - 1)
                .sort((event1, event2) => {
                  return (
                    new Date(event1.node.startTime) -
                    new Date(event2.node.startTime)
                  )
                })
                .map((event, index, events) => (
                  <GroupedEventsCards
                    events={events}
                    index={index}
                    event={event}
                    key={event.node.id + event.node.startTime}
                    toLoad={context.state.eventsToShow}
                  />
                ))}
            </ListingCardWrapper>
            <ColumnPagination width={1}>
              <EventCount>{`You're viewing ${context.state.eventsToShow} of ${context.state.events.length} events`}</EventCount>
              {context.state.eventsToShow < context.state.events.length && (
                <Button
                  onClick={() => {
                    context.actions.showMore(context.state.events.length)
                  }}
                  disabled={
                    context.state.eventsToShow >= context.state.events.length
                  }
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
