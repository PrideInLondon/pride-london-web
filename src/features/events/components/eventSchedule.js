/* eslint-disable prettier/prettier */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import EventScheduleItem from './eventScheduleItem'

const splitIntoArray = schedule =>
  schedule.reduce(
    (acc, item) => {
      if (item.startTime < '12:00') {
        return {
          ...acc,
          morning: [...acc.morning, item],
        }
      } else if (item.startTime < '17:00') {
        return {
          ...acc,
          afternoon: [...acc.afternoon, item],
        }
      }
      return {
        ...acc,
        evening: [...acc.evening, item],
      }
    },
    {
      morning: [],
      afternoon: [],
      evening: [],
    }
  )

const EventSchedule = props => {
  if (!props.schedule) return null

  const { morning, afternoon, evening } = splitIntoArray(props.schedule)
  return (
    <div>
      <h2>Schedule</h2>
      <EventScheduleItem title="Morning" data={morning} />
      <EventScheduleItem title="Afternoon" data={afternoon} />
      <EventScheduleItem title="Evening" data={evening} />
    </div>
  )
}

EventSchedule.propTypes = {
  schedule: PropTypes.array,
}

EventSchedule.defaultProps = {
  schedule: [],
}

export default EventSchedule

export const query = graphql`
  fragment eventScheduleFragment on ContentfulPerformance {
    id
    title
    startTime(formatString: "HH:mm")
  }
`
