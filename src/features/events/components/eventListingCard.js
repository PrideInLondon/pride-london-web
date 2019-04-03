import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'
import { formatDate } from '../helpers'

const Card = styled(Link)`
  border-radius: 5px;
  text-decoration: none;
  color: ${theme.colors.black};
  overflow: hidden;
  display: ${displayColumn => (displayColumn ? 'block' : 'flex')};
  position: relative;
  width: 100%;
  min-height: 130px;
  background-color: ${theme.colors.white};

  &:hover,
  &:focus {
    .card-img-wrapper {
      transform: scale(1.08);
    }
  }

  ${media.tablet`
    display: block;
    min-height: auto;
  `};
`

const CardImageOverflow = styled.div`
  overflow: hidden;
  flex-basis: 40%;
  flex-shrink: 0;
  height: auto;
  position: relative;
  padding-top: ${displayColumn => (displayColumn ? '56.25%' : '0')};
  min-height: 231px;

  ${media.tablet`
    padding-top: 56.25%;
  `};
`

const CardImageWrapper = styled.div`
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-image: url(${props => props.src});
  transition: transform 0.15s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`

const CardBody = styled.div`
  padding: 15px;
  background-color: ${theme.colors.white};
  flex-grow: 1;

  ${media.tablet`
    padding: 30px;
  `};
`

const CardDate = styled.span`
  display: block;
  color: ${theme.colors.darkGrey};
  font-size: 0.875rem;
  line-height: 1.43;
  margin-bottom: 0.65rem;
  font-family: ${theme.fonts.title};
  font-weight: 600;
`

const CardBullet = styled.span`
  display: inline;
`

const CardDateSpan = styled.span`
  display: inline;
`

const CardPrice = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${theme.colors.indigo};
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title};
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.75rem;

  ${media.tablet`
    font-size: 1rem;
  `};
`

const CardHeading = styled.h3`
  margin: 0;
  line-height: 26px;
  font-size: 20px;
  color: #2d2f7f;
  max-width: 220px;

  ${media.tablet`
    line-height: 30px;
    font-size: 24px;
    max-width: 340px;
  `};
`

export const EventListingCard = props => {
  const { event } = props
  const { date, time } = formatDate(event)
  return (
    <Card to={`/events/${event.id}`}>
      <CardImageOverflow>
        <CardImageWrapper
          className="card-img-wrapper"
          src={`${
            event.eventsListPicture.file.url
          }?fit=fill&w=400&h=225&f=faces`}
        >
          <CardImage
            src={`${
              event.eventsListPicture.file.url
            }?fit=fill&w=400&h=225&f=faces`}
            alt={event.eventsListPicture.title}
            width="400"
            height="225"
          />
        </CardImageWrapper>
      </CardImageOverflow>

      <CardBody>
        <CardDate>
          <CardDateSpan>{date}</CardDateSpan>
          <CardBullet> • </CardBullet> <CardDateSpan>{time}</CardDateSpan>
        </CardDate>
        <CardHeading>{event.name}</CardHeading>
      </CardBody>
      <CardPrice>
        {event.eventPriceLow === 0 ? 'Free' : `from £${event.eventPriceLow}`}
      </CardPrice>
    </Card>
  )
}

EventListingCard.propTypes = {
  event: PropTypes.object.isRequired,
}

export default EventListingCard
