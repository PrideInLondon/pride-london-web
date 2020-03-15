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
  margin-left: 20px;

  ${media.tablet`
    display: none;
  `};
`

const Wrapper = props => (
  <AnimatedFlexColumn
    width={{ default: 1, md: 1 / 3, lg: 1 / 4 }}
    padding={{ sm: '10px 0', md: '10px', lg: '10px 15px' }}
    {...props}
  />
)

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
  events: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired,
  toLoad: PropTypes.number.isRequired,
}

export default GroupedEventsCards
