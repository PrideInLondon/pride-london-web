import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import moment from 'moment'
import PropTypes from 'prop-types'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
import {
  AccessibilityIcon,
  DateIcon,
  GenderIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TicketIcon,
} from '../../components/icons'
import { Button } from '../../components/button'
import { formatPrice } from '../helpers'

const Wrapper = styled.div`
  background-color: ${theme.colors.indigo};
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  color: white;
  ${media.desktop`
    position: absolute;
    width: 400px;
    right: 0;
    top: -200px;
    padding: 40px;
 `};
`

const Row = styled.div`
  display: flex;
  margin-bottom: 14px;
  :last-child {
    margin-bottom: 0;
  }
`

const IconWrapper = styled.div`
  flex: 0 0 26px;
  display: flex;
  justify-content: center;
  margin-right: 16px;
  padding-top: 2px;
`

const Title = styled.h3`
  margin: 0;
  font-size: 1em;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  color: white;
  margin-bottom: 4px;
`

const Detail = styled.p`
  margin: 0;
  font-size: 0.875rem;
`

const Item = ({ title, icon, detail }) => (
  <Row>
    <IconWrapper>{icon}</IconWrapper>
    <div>
      {title && <Title>{title}</Title>}
      {detail && <Detail>{detail}</Detail>}
    </div>
  </Row>
)

const Hr = styled.hr`
  border: none;
  border-top: 1px solid ${theme.colors.eucalyptusGreen};
  width: 100%;
  margin: 16px 0px 32px 0px;
`

const VSpace = styled.div`
  margin-top: 15px;
`

export const formatDayRange = ({ startTime, endTime }) => {
  const startMoment = moment(startTime)
  const endMoment = moment(endTime)

  const dateFormat = 'dddd D MMMM YYYY'
  // if same day, return full day
  // if not same day, return a range
  return startMoment.format('L') === endMoment.format('L') ||
    (endMoment.format('Hms') === '000' && endMoment.diff(startTime, 'days') < 1)
    ? startMoment.format(dateFormat)
    : `${startMoment.format(dateFormat)} to ${endMoment.format(dateFormat)}`
}

const formatTimeRange = (startTime, endTime) => {
  const timeFormat = 'h:mma'
  return `${startTime.format(timeFormat)} to ${endTime.format(timeFormat)}`
}

const formatAddress = (addressLine1, addressLine2, city, postcode) =>
  [addressLine1, addressLine2, [city, postcode].filter(Boolean).join(' ')]
    .filter(Boolean)
    .join(', ')

const Link = styled.a`
  color: white;
  text-decoration: underline;
  :hover,
  :focus {
    text-decoration: none;
  }
`

const VENUE_DETAILS = {
  genderNeutralToilets: 'Gender neutral toilets',
  outdoors: 'Outdoors',
  indoors: 'Indoors',
}

const EventInfoCard = ({
  data: {
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
  },
  pageContext: { startTime, endTime },
}) => (
  <Wrapper>
    {startTime && endTime && (
      <Item
        icon={<DateIcon />}
        title={formatDayRange({ startTime, endTime })}
        detail={formatTimeRange(moment(startTime), moment(endTime))}
      />
    )}
    <Item
      icon={<TicketIcon />}
      title={formatPrice(eventPriceLow, eventPriceHigh)}
    />
    <Item
      icon={<MapPinIcon />}
      title={locationName}
      detail={formatAddress(addressLine1, addressLine2, city, postcode)}
    />
    {accessibilityOptions && accessibilityOptions.length > 0 && (
      <Item
        icon={<AccessibilityIcon />}
        title="Accessibility"
        detail={`${accessibilityOptions.join(', ')}.`}
      />
    )}
    {venueDetails &&
      venueDetails.indexOf(VENUE_DETAILS.genderNeutralToilets) > -1 && (
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

Item.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.object.isRequired,
  detail: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

Item.defaultProps = {
  detail: null,
  title: null,
}

EventInfoCard.propTypes = {
  data: PropTypes.shape({
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
  }).isRequired,
  pageContext: PropTypes.shape({
    id: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
  }).isRequired,
}

export default EventInfoCard

export const query = graphql`
  fragment eventInfoCardQuery on ContentfulEvent {
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
  }
`
