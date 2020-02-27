import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import ChevronIcon from '../../theme/assets/images/chevron-icon'
import { Consumer } from '../../appContext'
import { Container, Row, Column } from '../../components/grid'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import EventListingCard from '../EventListingCard'

const ViewAll = styled.a`
  color: ${theme.colors.indigo};
  font-family: ${theme.fonts.title};
  font-size: 1rem;
  padding-top: 5px;
  text-align: right;
  text-decoration: none;
`

const FlexColumn = styled(Column)`
  display: flex;
  ${media.tabletMax`
    width: 100%;
  `}
`

export const StyledContainer = styled(Container)`
  padding: 30px 0px;
  ${media.desktop`
    padding: 60px 0px;
  `}
`

const Heading = styled.h2`
  margin: 0;
  font-weight: 700;
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

const GreyWrapper = styled.div`
  background-color: ${theme.colors.lightGrey};
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
        <GreyWrapper>
          <StyledContainer>
            <HeadingRow>
              <Heading>You may also like</Heading>
              <ViewAll href="/events">
                View all<DesktopOnly>&nbsp;events</DesktopOnly>&nbsp;
                <ChevronIcon />
              </ViewAll>
            </HeadingRow>
            <Row>
              {eventsYouMayLike.map(event => (
                <FlexColumn
                  width={{ default: 1, sm: 0.5, lg: 0.3333 }}
                  key={event.node.id}
                >
                  <EventListingCard event={event.node} />
                </FlexColumn>
              ))}
            </Row>
          </StyledContainer>
        </GreyWrapper>
      )
    }}
  </Consumer>
)

EventsYouMayLike.propTypes = {
  eventId: PropTypes.string.isRequired,
}

export default EventsYouMayLike
