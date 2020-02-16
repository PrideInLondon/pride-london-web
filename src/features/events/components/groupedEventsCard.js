import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { AnimatedFlexColumn } from '../../../components/grid'
import { media } from '../../../theme/media'
import constants from '../../../constants'
import { colors } from '../../../theme/colors'
import EventListingCard from './eventListingCard'

const DateGroupHeading = styled.h2`
  margin: 1rem 0;
  color: ${colors.white};
  margin-left: 20px;

  ${media.tablet`
    display: none;
  `};
`

const generateDateHeader = ({ prevEvent, currEvent }) => {
  const formatEventStart = event =>
    moment(event.node.startTime).format(constants.dateFormat)

  const currStartDate = formatEventStart(currEvent)
  const prevStartDate = prevEvent && formatEventStart(prevEvent)

  if (!prevEvent || currStartDate !== prevStartDate)
    return moment(currEvent.node.startTime).format('dddd D MMM')
}

const GroupedEventsCards = ({ event, index, events, toLoad }) => {
  const header = generateDateHeader({
    prevEvent: events[index - 1],
    currEvent: event,
  })
  return (
    <AnimatedFlexColumn
      width={{ default: 1, md: 1 / 3, lg: 1 / 4 }}
      key={event.node.id}
      padding={{ sm: '10px 0', md: '10px', lg: '10px 15px' }}
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
    </AnimatedFlexColumn>
  )
}

GroupedEventsCards.propTypes = {
  events: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired,
  toLoad: PropTypes.number.isRequired,
}

export default GroupedEventsCards
