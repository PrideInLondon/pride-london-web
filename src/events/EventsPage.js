import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from '../components/helmet'
import { colors } from '../theme/colors'
import { Button } from '../components/button'
import { Container, Row } from '../components/grid'
import { Consumer } from '../appContext'
import { filterByLimit } from '../events/helpers'
import GroupedEventsCards from './GroupedEventsCards'
import { EventsPageBanner } from './EventsPageBanner'
import {
  ColumnPagination,
  EventCount,
  ListingCardWrapper,
  PageWrapper,
} from './EventsPage.styles'

const EventsPage = ({
  data: {
    diageo,
    file: { childImageSharp },
  },
}) => {
  const renderEventCount = (filteredCount, eventsToShow) => {
    let text

    if (filteredCount) {
      text = `You're viewing ${
        eventsToShow <= filteredCount ? eventsToShow : filteredCount
      } of ${filteredCount} events`
    } else {
      text =
        'There are no events matching your criteria. Please try changing your filter options.'
    }

    return <EventCount>{text}</EventCount>
  }

  return (
    <Consumer>
      {context => (
        <PageWrapper backgroundColor={colors.indigo}>
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
          <Container marginTop={{ default: 0, md: '60px' }}>
            <Row>
              <ListingCardWrapper>
                {context.filteredEvents
                  .filter(filterByLimit, context.state.eventsToShow)
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
                {renderEventCount(
                  context.filteredEvents.length,
                  context.state.eventsToShow
                )}
                {context.state.eventsToShow < context.filteredEvents.length && (
                  <Button
                    onClick={() => {
                      context.actions.showMore(context.filteredEvents.length)
                    }}
                    disabled={
                      context.state.eventsToShow >=
                      context.filteredEvents.length
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
        </PageWrapper>
      )}
    </Consumer>
  )
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage
