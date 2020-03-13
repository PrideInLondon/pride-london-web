import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { AnimatedFlexColumn } from '../components/grid'
import { media } from '../theme/media'
import constants from '../constants'
import { colors } from '../theme/colors'
import EventListingCard from './EventListingCard'
import AppPromotionCard from './AppPromotionCard'

const DateGroupHeading = styled.h2`
  margin: 1rem 0;
  color: ${colors.white};

  ${media.tablet`
    display: none;
  `};
`

const Wrapper = props => (
  <AnimatedFlexColumn
    width={{ default: 1, md: 1 / 3, lg: 1 / 4 }}
    py={[2, 2, 2, 3]}
    {...props}
  />
)

export const generateHeader = ({ index, prevEvent, event }) => {
  const prevStartDate =
    prevEvent && moment(prevEvent.node.startTime).format(constants.dateFormat)
  const currStartDate = moment(event.node.startTime).format(
    constants.dateFormat
  )

  const prevIsRecurring = prevEvent && !!prevEvent.node.recurrenceDates
  const currIsRecurring = !!event.node.recurrenceDates

  // first event on page
  // OR events do not begin on the same day
  // OR one is single and one is recurring
  return (
    (index === 0 ||
      prevStartDate !== currStartDate ||
      prevIsRecurring !== currIsRecurring) &&
    `${currIsRecurring ? 'From ' : ''}${moment(event.node.startTime).format(
      'dddd D MMM'
    )}`
  )
}

const GroupedEventsCards = ({ event, index, prevEvent, toLoad }) => {
  const header = generateHeader({ index, prevEvent, event })
  return (
    <>
      {index === 3 && (
        <Wrapper key="appPromotionCard">
          <AppPromotionCard />
        </Wrapper>
      )}
      <Wrapper
        key={event.node.id}
        animation={
          index >= toLoad - constants.itemsToLoad &&
          toLoad !== constants.itemsToLoad
            ? true
            : false
        }
      >
        {header && <DateGroupHeading>{header}</DateGroupHeading>}
        <EventListingCard
          event={event.node}
          variant={{ default: 'row', md: 'column' }}
        />
      </Wrapper>
    </>
  )
}

GroupedEventsCards.propTypes = {
  prevEvent: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired,
  toLoad: PropTypes.number.isRequired,
}

export default GroupedEventsCards
