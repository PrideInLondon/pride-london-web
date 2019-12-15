import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'
import { formatDate, generateEventSlug } from '../helpers'
import CalendarIcon from '../../../theme/assets/images/calendar-icon'

// We have to skip displayColumn prop here to not render it in the DOM
// eslint-disable-next-line no-unused-vars
const Card = styled(({ displaycolumn, ...rest }) => <div {...rest} />)`
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  text-decoration: none;
  color: ${theme.colors.black};
  overflow: hidden;
  display: ${props => (props.displaycolumn ? 'block' : 'flex')};
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

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: ${theme.colors.white};
`

const CardDate = styled.span`
  display: flex;
  flex-wrap: wrap;
  color: ${theme.colors.darkCyan};
  font-size: 0.875rem;
  line-height: 1.43;
  margin-bottom: 0.65rem;
  font-family: ${theme.fonts.title};
  font-weight: 600;
`

const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
`

const Details = styled(Link)`
  color: ${theme.colors.indigo};
  text-decoration: none;
  border-bottom: 2px solid ${theme.colors.darkCyan};
`

const Price = styled.div`
  align-self: flex-end;
  color: ${theme.colors.darkCyan};
  font-family: Poppins;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.25;
  letter-spacing: -0.16px;
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

const Location = styled.p`
  color: ${theme.colors.darkIndigo};
  font-size: 0.875rem;
  font-weight: 300;
  margin-top: 15px;
`

const PaddedCalendarIcon = styled(CalendarIcon)`
  margin-right: 8.5px;
  height: 1rem;
  align-self: center;
`

const When = ({ date, time }) => (
  <CardDate>
    <PaddedCalendarIcon color={theme.colors.darkCyan} />
    {date} • {time}
  </CardDate>
)

When.propTypes = {
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
}

export const EventListingCard = props => {
  const { event, displaycolumn } = props
  const { date, time } = formatDate(event)
  return (
    <Card displaycolumn={displaycolumn}>
      <CardImageOverflow displaycolumn={displaycolumn}>
        <CardImageWrapper className="card-img-wrapper">
          <CardImage
            fixed={event.eventsListPicture.fixed}
            alt={event.eventsListPicture.title}
          />
        </CardImageWrapper>
      </CardImageOverflow>
      <CardContent>
        <When {...{ date, time }} />
        <CardHeading>{event.name}</CardHeading>
        <Location>Brasseire Zedel, Piccadilly Circus</Location>
        <CardFooter>
          <Details
            to={generateEventSlug({
              ...event,
              occurrence: event.recurrenceDates && event.startTime,
            })}
          >
            Event details
          </Details>
          <Price>
            {event.eventPriceLow === 0
              ? 'Free entry'
              : `From £${event.eventPriceLow}`}
          </Price>
        </CardFooter>
      </CardContent>
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
