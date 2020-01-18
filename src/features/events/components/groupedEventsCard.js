import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import { AnimatedFlexColumn } from '../../../components/grid'
import { media } from '../../../theme/media'
import constants from '../../../constants'
import EventListingCard from './eventListingCard'

const DateGroupHeading = styled.h2`
  margin: 1rem 0;

  ${media.tablet`
    display: none;
  `};
`

const GroupedEventsCards = ({ event, index, events, toLoad }) => {
  let header
  const longDayOfMonth = 'dddd D MMM'

  if (index === 0) {
    header = moment(event.node.startTime).format(longDayOfMonth)
  } else {
    const startDate = moment(event.node.startTime).format(constants.dateFormat)
    const prevStartDate = moment(events[index - 1].node.startTime).format(
      constants.dateFormat
    )

    if (startDate !== prevStartDate) {
      header = moment(event.node.startTime).format(longDayOfMonth)
    }
  }
  return (
    <AnimatedFlexColumn
      width={[
        1, // 100% between 0px screen width and first breakpoint (375px)
        1, // 100% between first breakpoint(375px) and second breakpoint (768px)
        1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
        1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
      ]}
      key={event.node.id}
      py={[2, 2, 2, 3]}
      animation={
        index >= toLoad - constants.itemsToLoad &&
        toLoad !== constants.itemsToLoad
          ? true
          : false
      }
    >
      {header && <DateGroupHeading>{header}</DateGroupHeading>}
      <EventListingCard event={event.node} />
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
