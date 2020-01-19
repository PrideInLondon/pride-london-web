import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { colors } from '../../../theme/colors'
import { fonts } from '../../../theme/fonts'
import { mediaQueries } from '../../../theme/mediaQueries'
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
  color: ${colors.darkCyan};
  font-size: 0.75rem;
  line-height: 1.43;
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

const Details = styled(Link)`
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
  ${mediaQueries.md} {
    font-size: 0.875rem;
  }
`

const PaddedCalendarIcon = styled(CalendarIcon)`
  margin-right: 8.5px;
  height: 1rem;
  align-self: center;
`

const When = ({ startTime, endTime, recurrenceDates }) => (
  <CardDate>
    <PaddedCalendarIcon color={colors.darkCyan} />
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

export const EventListingCard = ({ event, variant }) => {
  return (
    <Card variant={variant}>
      <CardImage
        image={event.eventsListPicture.fixed}
        alt={event.eventsListPicture.title}
      />
      <CardContent>
        <When {...event} />
        <CardTitle>{event.name}</CardTitle>
        <Location>
          {event.locationName}, {event.addressLine1}
        </Location>
        <StyledCardFooter>
          <div>
            <Details
              to={generateEventSlug({
                ...event,
                occurrence: event.recurrenceDates && event.startTime,
              })}
            >
              Event details
            </Details>
          </div>
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
  variant: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      default: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string,
    }),
  ]).isRequired,
}

export default EventListingCard
