import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import {
  AccessibilityIcon,
  GenderIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TicketIcon,
} from '../../components/icons'
import { Icon } from '../../components/icon'
import { Button } from '../../components/button'
import { colors } from '../../theme/colors'
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
  LiveItemProps,
  ItemProps,
  WhenProps,
  LocationProps,
  EventInfoCardProps,
} from './EventInfoCard.types'

const LiveItem = ({ endDate }: LiveItemProps) => (
  <Row style={{ backgroundColor: colors.white }}>
    <Icon name="live" variant="indigo" width="2em" height="2em" />
    <div style={{ marginLeft: '0.25em' }}>
      <Title
        style={{ color: colors.indigo }}
      >{`Live now until ${formatShortTime(endDate)}`}</Title>
    </div>
  </Row>
)

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

  // if one day, return full day
  // if not same day, return a range
  return startMoment.format('L') === endMoment.format('L') ||
    (endMoment.format('Hms') === '000' && endMoment.diff(startDate, 'days') < 1)
    ? startMoment.format('dddd D MMMM YYYY')
    : `${startMoment.format('DD MMM')} - ${endMoment.format('DD MMM')}`
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

const When = ({ onDemand, platform, dates, startDate, endDate }: WhenProps) =>
  onDemand ? (
    <Item
      icon={<Icon name="on-demand" variant="white" width="2em" height="2em" />}
      title="On demand"
      detail={formatDayRange({ startDate, endDate })}
    />
  ) : isVirtualEvent(platform) && dates.some((date) => isLiveNow(date)) ? (
    <LiveItem {...{ endDate }} />
  ) : (
    <Item
      icon={<Icon name="date" variant="white" width="2em" height="2em" />}
      title={formatDayRange({ startDate, endDate })}
      detail={formatTimeRange({ startDate, endDate })}
    />
  )

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
    <Item
      icon={<Icon name="laptop" variant="white" width={26} height={26} />}
      title={`On ${platform}`}
    />
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
    onDemand,
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
    date: { dates },
  },
  pageContext: { startDate, endDate },
}: EventInfoCardProps) => (
  <Wrapper>
    <When {...{ onDemand, platform, dates, startDate, endDate }} />
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

export default EventInfoCard

export const query = graphql`
  fragment eventInfoCardQuery on ContentfulEvent {
    location2
    onDemand: ondemand
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
