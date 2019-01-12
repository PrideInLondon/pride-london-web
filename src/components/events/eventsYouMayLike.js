import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import ChevronRight from '../../components/chevronRight'
import { Consumer } from '../../components/appContext'
import { Container, Row, Column } from '../../components/grid'
import { media } from '../../theme/media'
import EventListingCard from './eventListingCard'

const ViewAll = styled.a`
  color: ${props => props.theme.colors.indigo};
  font-family: ${props => props.theme.fonts.title};
  font-size: 1rem;
  padding-top: 5px;
  text-align: right;
  text-decoration: none;
`

const FlexColumn = styled(Column)`
  display: flex;
`

export const StyledContainer = styled(Container)`
  padding: 30px 0px;
  ${media.desktop`
    padding: 60px 0px;
  `}
  background-color: ${props => props.theme.colors.lightGrey};
`

const Heading = styled.h1`
  font-size: 1.25rem;
  margin: 0;
  ${media.desktop`
    font-size: 2rem;
  `};
`

const DesktopOnly = styled.span`
  display: none;
  ${media.desktop`
    display: inline;
  `};
`

const HeadingRow = styled(Row)`
  margin-bottom: 20px;
  /* add padding to match column padding */
  padding: 0px 10px;
  ${media.desktop`
    padding: 0px 15px;
  `};
  align-items: center;
  justify-content: space-between;
`

const filterEventsYouMayLike = (events, eventId) => {
  const filteredEvents = events.filter(event => {
    if (event.node.id === eventId) return false

    return moment(event.node.startTime).diff(moment(), 'hours') > 0
  })

  return filteredEvents.splice(0, 3)
}

export const EventsYouMayLike = ({ eventId }) => (
  <Consumer>
    {context => {
      const eventsYouMayLike = filterEventsYouMayLike(
        context.state.events,
        eventId
      )

      if (eventsYouMayLike.length === 0) return null

      return (
        <StyledContainer>
          <HeadingRow>
            <Heading>You may also like</Heading>
            <ViewAll href="/events">
              View all<DesktopOnly>&nbsp;events</DesktopOnly>&nbsp;
              <ChevronRight />
            </ViewAll>
          </HeadingRow>
          <Row>
            {eventsYouMayLike.map(event => (
              <FlexColumn width={[1, 1, 1 / 2, 1 / 3]} key={event.node.id}>
                <EventListingCard event={event.node} />
              </FlexColumn>
            ))}
          </Row>
        </StyledContainer>
      )
    }}
  </Consumer>
)

EventsYouMayLike.propTypes = {
  eventId: PropTypes.string.isRequired,
}

export default EventsYouMayLike
