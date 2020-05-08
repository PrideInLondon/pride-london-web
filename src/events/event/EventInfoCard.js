import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import PropTypes from 'prop-types'
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

const Item = ({ title, icon, detail }) => (
  <Row>
    <IconWrapper>{icon}</IconWrapper>
    <div>
      {title && <Title>{title}</Title>}
      {detail && <Detail>{detail}</Detail>}
    </div>
  </Row>
)

export const formatDayRange = ({ startDate, endDate }) => {
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

export const formatTimeRange = ({ startDate, endDate }) => {
  return `${formatShortTime(startDate)} to ${formatShortTime(endDate)}`
}

export const formatAddress = (addressLine1, addressLine2, city, postcode) =>
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
}) =>
  isVirtualEvent(platform) ? (
    <Item icon={<LaptopIcon size={26} />} title={`On ${platform}`} />
  ) : (
    <Item
      icon={<MapPinIcon />}
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
          icon={<AccessibilityIcon />}
          title="Accessibility"
          detail={`${accessibilityOptions.join(', ')}.`}
        />
      )}
      {venueDetails && venueDetails.includes('Gender neutral toilets') && (
        <Item icon={<GenderIcon />} detail="Gender neutral toilets" />
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

Item.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object.isRequired,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Item.defaultProps = {
  detail: null,
  title: null,
}

Location.propTypes = {
  platform: PropTypes.string,
  locationName: PropTypes.string,
  addressLine1: PropTypes.string,
  addressLine2: PropTypes.string,
  city: PropTypes.string,
  postcode: PropTypes.string,
}

Location.defaultProps = {
  platform: '',
  locationName: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  postcode: '',
}

EventInfoCard.propTypes = {
  data: PropTypes.shape({
    location2: PropTypes.string.isRequired,
    locationName: PropTypes.string.isRequired,
    addressLine1: PropTypes.string,
    addressLine2: PropTypes.string,
    city: PropTypes.string,
    postcode: PropTypes.string,
    eventPriceLow: PropTypes.number,
    eventPriceHigh: PropTypes.number,
    email: PropTypes.string,
    phone: PropTypes.string,
    ticketingUrl: PropTypes.string,
    cta: PropTypes.string,
    accessibilityOptions: PropTypes.arrayOf(PropTypes.string),
    venueDetails: PropTypes.arrayOf(PropTypes.string),
    date: PropTypes.shape({
      dates: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          startDate: PropTypes.string,
          endDate: PropTypes.string,
        })
      ),
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
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
