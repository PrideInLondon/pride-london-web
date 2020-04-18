import React from 'react'
import { colors } from '../../theme/colors'
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardFooter,
} from '../../components/card'
import {
  generateEventSlug,
  momentizeRecurrenceDate,
  isVirtualEvent,
} from '../helpers'
import { generateDisplayDate } from '../EventCard'
import { EventListingCardProps, WhenProps } from './EventListingCard.types'
import {
  CardDate,
  Details,
  Location,
  PaddedCalendarIcon,
  Price,
} from './EventListingCard.styles'

const When: React.FC<WhenProps> = ({ startTime, endTime, recurrenceDates }) => {
  return (
    <CardDate>
      <PaddedCalendarIcon color={colors.darkCyan} />
      {generateDisplayDate({
        start: startTime,
        end: endTime,
        lastOccurrence:
          recurrenceDates &&
          momentizeRecurrenceDate(
            recurrenceDates[recurrenceDates.length - 1]
          ).toDate(),
      })}
    </CardDate>
  )
}

When.defaultProps = {
  recurrenceDates: [],
}

export const formatLocation = ({
  platform,
  locationName,
  addressLine1,
}: {
  platform: string
  locationName: string
  addressLine1: string
}) =>
  isVirtualEvent(platform)
    ? platform
    : `${locationName}${addressLine1 ? `, ${addressLine1}` : ''}`

export const EventListingCard: React.FC<EventListingCardProps> = ({
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
      <CardFooter flexDirection="row" justifyContent="space-between">
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
      </CardFooter>
    </CardContent>
  </Card>
)

EventListingCard.defaultProps = {
  variant: 'column',
}

export default EventListingCard
