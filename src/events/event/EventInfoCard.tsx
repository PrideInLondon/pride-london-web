import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import {
  AccessibilityIcon,
  CalendarIcon,
  GenderIcon,
  LaptopIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TicketIcon,
  LiveIcon,
} from '../../components/icons'
import { Button } from '../../components/button'
import {
  formatPrice,
  formatShortTime,
  isVirtualEvent,
  isLiveNow,
} from '../helpers'
import {
  Row,
  IconWrapper,
  Title,
  Detail,
  Wrapper,
  Link,
  Hr,
  VSpace,
} from './EventInfoCard.styles'
import {
  ItemProps,
  LocationProps,
  EventInfoCardProps,
} from './EventInfoCard.types'

const Item = ({ title, icon, detail }: ItemProps) => (
  <Row>
    <IconWrapper>{icon}</IconWrapper>
    <div>
      {title && <Title>{title}</Title>}
      {detail && <Detail>{detail}</Detail>}
    </div>
  </Row>
)

export const formatDayRange = ({
  startDate,
  endDate,
}: {
  startDate: string
  endDate: string
}) => {
  const startMoment = moment(startDate)
  const endMoment = moment(endDate)

  const dateFormat = 'dddd D MMMM YYYY'
  // if same day, return full day
  // if not same day, return a range
  return startMoment.format('L') === endMoment.format('L') ||
    (endMoment.format('Hms') === '000' && endMoment.diff(startDate, 'days') < 1)
    ? startMoment.format(dateFormat)
    : `${startMoment.format(dateFormat)} to ${endMoment.format(dateFormat)}`
}

export const formatTimeRange = ({
  startDate,
  endDate,
}: {
  startDate: string
  endDate: string
}) => {
  return `${formatShortTime(startDate)} to ${formatShortTime(endDate)}`
}

export const formatAddress = (
  addressLine1: string,
  addressLine2: string,
  city: string,
  postcode: string
) =>
  [addressLine1, addressLine2, [city, postcode].filter(Boolean).join(' ')]
    .filter(Boolean)
    .join(', ')

export const Location = ({
  platform,
  locationName,
  addressLine1,
  addressLine2,
  city,
  postcode,
}: LocationProps) =>
  isVirtualEvent(platform) ? (
    <Item icon={<LaptopIcon size={26} />} title={`On ${platform}`} />
  ) : (
    <Item
      icon={<MapPinIcon variant="white" />}
      title={locationName}
      detail={formatAddress(addressLine1, addressLine2, city, postcode)}
    />
  )

const EventInfoCard = ({
  data: {
    location2: platform,
    locationName,
    addressLine1,
    addressLine2,
    city,
    postcode,
    eventPriceLow,
    eventPriceHigh,
    email,
    phone,
    venueDetails,
    ticketingUrl,
    cta,
    accessibilityOptions,
    date,
  },
  pageContext: { startDate, endDate },
}) => {
  const liveNow =
    isVirtualEvent(platform) && date.dates.some(date => isLiveNow(date))
  return (
    <Wrapper>
      <Item
        icon={
          liveNow ? (
            <LiveIcon variant="white" />
          ) : (
            <CalendarIcon variant="white" />
          )
        }
        title={liveNow ? 'Live now' : formatDayRange({ startDate, endDate })}
        detail={formatTimeRange({ startDate, endDate })}
      />

      <Item
        icon={<TicketIcon />}
        title={formatPrice(eventPriceLow, eventPriceHigh)}
      />
      <Location
        {...{
          platform,
          locationName,
          addressLine1,
          addressLine2,
          city,
          postcode,
        }}
      />
      {accessibilityOptions && accessibilityOptions.length > 0 && (
        <Item
          icon={<AccessibilityIcon variant="white" />}
          title="Accessibility"
          detail={`${accessibilityOptions.join(', ')}.`}
        />
      )}
      {venueDetails && venueDetails.includes('Gender neutral toilets') && (
        <Item
          icon={<GenderIcon variant="white" />}
          detail="Gender neutral toilets"
        />
      )}
      {(email || phone || ticketingUrl) && <Hr />}
      {email && (
        <Item
          icon={<MailIcon role="presentation" />}
          detail={
            <Link href={`mailto:${email}`} aria-label="email the venue">
              {email}
            </Link>
          }
        />
      )}
      {phone && (
        <Item
          icon={<PhoneIcon />}
          detail={
            <Link href={`tel:${phone}`} aria-label="call the venue">
              {phone}
            </Link>
          }
        />
      )}
      {(phone || email) && ticketingUrl && <VSpace />}
      {ticketingUrl && <Button to={ticketingUrl}>{cta}</Button>}
    </Wrapper>
  )
}

export default EventInfoCard

export const query = graphql`
  fragment eventInfoCardQuery on ContentfulEvent {
    location2
    locationName
    addressLine1
    addressLine2
    city
    postcode
    eventPriceLow
    eventPriceHigh
    email
    phone
    ticketingUrl
    cta
    accessibilityOptions
    venueDetails
    date {
      dates {
        startDate
        endDate
        id
      }
    }
  }
`
