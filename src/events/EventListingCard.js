import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../theme/colors'
import { fonts } from '../theme/fonts'
import { mediaQueries } from '../theme/mediaQueries'
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardFooter,
} from '../components/card'
import CalendarIcon from '../components/icons/calendarIcon'
import {
  generateEventSlug,
  momentizeRecurrenceDate,
  isVirtualEvent,
} from './helpers'
import { generateDisplayDate } from './EventCard'

const CardDate = styled.span`
  display: flex;
  color: ${colors.darkCyan};
  font-size: 0.75rem;
  line-height: 1.29;
  margin-bottom: 0.65rem;
  font-family: ${fonts.title};
  font-weight: 600;
  ${mediaQueries.md} {
    font-size: 0.875rem;
  }
`

const StyledCardFooter = styled(CardFooter)`
  flex-direction: row;
  justify-content: space-between;
`

const Details = styled.span`
  color: ${colors.indigo};
  text-decoration: none;
  font-size: 1rem;
  padding-bottom: 2px;
  background-image: linear-gradient(
    180deg,
    transparent calc(100% - 2px),
    ${colors.darkCyan} 2px
  );
  background-size: 100% 100%;
  ${mediaQueries.md} {
    font-size: 1.125rem;
  }
`

const Price = styled.div`
  align-self: flex-end;
  color: ${colors.darkCyan};
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25;
  letter-spacing: -0.16px;

  ${mediaQueries.md} {
    font-size: 1rem;
  }
`

const Location = styled.p`
  color: ${colors.darkIndigo};
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.29;
  ${mediaQueries.md} {
    font-size: 0.875rem;
  }
`

const PaddedCalendarIcon = styled(CalendarIcon)`
  margin-right: 8.5px;
  height: 1rem;
`

const When = ({ startTime, endTime, recurrenceDates }) => (
  <CardDate>
    <PaddedCalendarIcon color={colors.darkCyan} />
    {generateDisplayDate({
      start: new Date(startTime),
      end: new Date(endTime),
      lastOccurrence:
        recurrenceDates &&
        new Date(
          momentizeRecurrenceDate(recurrenceDates[recurrenceDates.length - 1])
        ),
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

export const formatLocation = ({ platform, locationName, addressLine1 }) =>
  isVirtualEvent(platform)
    ? platform
    : `${locationName}${addressLine1 ? `, ${addressLine1}` : ''}`

export const EventListingCard = ({
  event: {
    id,
    name,
    eventsListPicture,
    startTime,
    endTime,
    recurrenceDates,
    location2: platform,
    locationName,
    addressLine1,
    eventPriceLow,
  },
  variant,
}) => (
  <Card variant={variant} to={generateEventSlug({ id, name })}>
    <CardImage image={eventsListPicture.fixed} alt={eventsListPicture.title} />
    <CardContent>
      <When {...{ startTime, endTime, recurrenceDates }} />
      <CardTitle>{name}</CardTitle>
      <Location>
        {formatLocation({
          platform,
          locationName,
          addressLine1,
        })}
      </Location>
      <StyledCardFooter>
        <div>
          <Details>Event details</Details>
        </div>
        <Price>
          {eventPriceLow === 0
            ? 'Free entry'
            : `From £${
                eventPriceLow % 1 === 0
                  ? eventPriceLow
                  : eventPriceLow.toFixed(2)
              }`}
        </Price>
      </StyledCardFooter>
    </CardContent>
  </Card>
)

EventListingCard.propTypes = {
  event: PropTypes.object.isRequired,
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      default: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string,
    }),
  ]),
}

EventListingCard.defaultProps = {
  variant: 'column',
}

export default EventListingCard
