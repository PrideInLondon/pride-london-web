import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { color } from 'styled-system'
import { Helmet } from '../components/helmet'
import { media } from '../theme/media'
import { colors } from '../theme/colors'
import { GroupedEventsCards } from '../features/events'
import Button from '../components/button'
import { Container, Row, Column } from '../components/grid'
import { Consumer } from '../appContext'
import { filterByLimit } from '../features/events/helpers'
import { EventsPageBanner } from '../features/events/components/eventsPageBanner'

export const EventsPageQuery = graphql`
  query eventsPageQuery {
    file(relativePath: { regex: "/banners/events/bg@3x/" }) {
      size
      name
      childImageSharp {
        desktop: fixed(
          width: 920
          height: 500
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
        tablet: fixed(
          width: 768
          height: 417
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
        mobile: fixed(
          width: 480
          height: 260
          quality: 100
          cropFocus: CENTER
        ) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`

const ColumnPagination = styled(Column)`
  text-align: center;
  padding-bottom: 20px;

  ${media.tablet`
    padding-top: 50px;
    padding-bottom: 60px;
  `};
`

const EventCount = styled.p`
  font-size: 0.875rem;
  line-height: 1.214;
  color: ${colors.white};
`

const ListingCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
`

const PageWrapper = styled.div`
  ${color}
`

export const Events = ({
  data: {
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
            backgroundColor={colors.darkCyan}
            image={childImageSharp}
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

Events.propTypes = {
  data: PropTypes.object.isRequired,
}
export default Events
