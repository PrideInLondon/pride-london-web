import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../../../theme/theme'
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardFooter,
} from '../../../components/card'
import { generateEventSlug } from '../helpers'
import { generateDisplayDate } from '../helpers/eventCard'
import CalendarIcon from '../../../theme/assets/images/calendar-icon'

const CardDate = styled.span`
  display: flex;
  flex-wrap: wrap;
  color: ${theme.colors.darkCyan};
  font-size: 0.875rem;
  line-height: 1.43;
  margin-bottom: 0.65rem;
  font-family: ${theme.fonts.title};
  font-weight: 600;
`

const StyledCardFooter = styled(CardFooter)`
  flex-direction: row;
  justify-content: space-between;
`

const Details = styled(Link)`
  color: ${theme.colors.indigo};
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.darkCyan};
`

const Price = styled.div`
  align-self: flex-end;
  color: ${theme.colors.darkCyan};
  font-family: Poppins;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.16px;
`

const Location = styled.p`
  color: ${theme.colors.darkIndigo};
  font-size: 0.875rem;
  font-weight: 300;
  margin-top: 15px;
`

const PaddedCalendarIcon = styled(CalendarIcon)`
  margin-right: 8.5px;
  height: 1rem;
  align-self: center;
`

const When = ({ startTime, endTime, recurrenceDates }) => (
  <CardDate>
    <PaddedCalendarIcon color={theme.colors.darkCyan} />
    {generateDisplayDate({
      start: new Date(startTime),
      end: new Date(endTime),
    })}
  </CardDate>
)

When.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  recurrenceDates: PropTypes.arrayOf(PropTypes.string),
}

When.defaultProps = {
  recurrenceDates: [],
}

export const EventListingCard = ({ event }) => {
  return (
    <Card>
      <CardImage
        image={event.eventsListPicture.fixed}
        alt={event.eventsListPicture.title}
      />
      <CardContent height={{ desktop: '300px' }}>
        <When {...event} />
        <CardTitle>{event.name}</CardTitle>
        <Location>
          {event.locationName}, {event.addressLine1}
        </Location>
        <StyledCardFooter>
          <Details
            to={generateEventSlug({
              ...event,
              occurrence: event.recurrenceDates && event.startTime,
            })}
          >
            Event details
          </Details>
          <Price>
            {event.eventPriceLow === 0
              ? 'Free entry'
              : `From £${event.eventPriceLow}`}
          </Price>
        </StyledCardFooter>
      </CardContent>
    </Card>
  )
}

EventListingCard.propTypes = {
  event: PropTypes.object.isRequired,
}

export default EventListingCard
