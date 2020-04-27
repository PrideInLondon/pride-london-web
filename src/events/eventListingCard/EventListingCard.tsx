import React from 'react'
import { colors } from '../../theme/colors'
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardFooter,
} from '../../components/card'
import { generateEventSlug } from '../helpers'
import { generateDisplayDate, formatLocation } from './EventListingCard.utils'
import { EventListingCardProps, WhenProps } from './EventListingCard.types'
import {
  CardDate,
  Details,
  Location,
  PaddedCalendarIcon,
  Price,
} from './EventListingCard.styles'

const When: React.FC<WhenProps> = ({ dates }) => {
  return (
    <CardDate>
      <PaddedCalendarIcon color={colors.darkCyan} />
      {generateDisplayDate({
        dates,
      })}
    </CardDate>
  )
}

export const EventListingCard: React.FC<EventListingCardProps> = ({
  event: {
    id,
    name,
    eventsListPicture,
    date: { dates },
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
      <When dates={dates} />
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
