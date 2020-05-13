import React from 'react'
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardFooter,
} from '../../components/card'
import { generateEventSlug, isVirtualEvent, isLiveNow } from '../helpers'
import { LiveIcon, CalendarIcon, OnDemandIcon } from '../../components/icons'
import { colors } from '../../theme/colors'
import { IconProps } from '../../components/icons/Icon.types'
import { generateDisplayDate, formatLocation } from './EventListingCard.utils'
import { EventListingCardProps, WhenProps } from './EventListingCard.types'
import {
  CardDate,
  WhenText,
  Details,
  Location,
  Price,
} from './EventListingCard.styles'

const When: React.FC<WhenProps> = ({ onDemand, platform, dates }) => {
  const iconProps: IconProps = { size: 24, variant: 'blue' }
  const showLiveNow =
    !onDemand && isVirtualEvent(platform) && dates.some(date => isLiveNow(date))
  return (
    <CardDate>
      <WhenText color={showLiveNow ? colors.indigo : colors.darkCyan}>
        {onDemand ? (
          <>
            <OnDemandIcon {...iconProps} />
            {generateDisplayDate({
              dates,
              onDemand: true,
            })}
          </>
        ) : showLiveNow ? (
          <>
            <LiveIcon {...iconProps} />
            Live now
          </>
        ) : (
          <>
            <CalendarIcon {...iconProps} />
            {generateDisplayDate({
              dates,
            })}
          </>
        )}
      </WhenText>
    </CardDate>
  )
}

export const EventListingCard: React.FC<EventListingCardProps> = ({
  event: {
    id,
    name,
    eventsListPicture,
    date: { dates },
    onDemand,
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
      <When {...{ onDemand, platform, dates }} />
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
