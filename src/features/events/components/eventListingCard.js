import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'
import { formatDate, generateEventSlug } from '../helpers'

// We have to skip displayColumn prop here to not render it in the DOM
// eslint-disable-next-line no-unused-vars
const Card = styled(({ displaycolumn, ...rest }) => <Link {...rest} />)`
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  text-decoration: none;
  color: ${theme.colors.black};
  overflow: hidden;
  display: ${props => (props.displaycolumn ? 'block' : 'flex')};
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
  padding-top: ${props => (props.displaycolumn ? '56.25%' : '0')};
  min-height: 180px;

  ${media.tablet`
    min-height: 231px;
    padding-top: 56.25%;
  `};
`

const CardImageWrapper = styled.div`
  transition: transform 0.15s ease-out;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`

const CardImage = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 100%;
  min-width: 100%;
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
  font-size: 1rem;
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
  const { event, displaycolumn } = props
  const { date, time } = formatDate(event)
  return (
    <Card
      to={generateEventSlug({
        ...event,
        occurrence: event.recurrenceDates && event.startTime,
      })}
      displaycolumn={displaycolumn}
    >
      <CardImageOverflow displaycolumn={displaycolumn}>
        <CardImageWrapper className="card-img-wrapper">
          <CardImage
            fixed={event.eventsListPicture.fixed}
            alt={event.eventsListPicture.title}
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
  displaycolumn: PropTypes.bool,
}

EventListingCard.defaultProps = {
  displaycolumn: false,
}

export default EventListingCard
