import moment from 'moment'
import { formatTime, filterPastEvents, isVirtualEvent } from '../helpers'
import { EventDateOccurrence } from './EventListingCard.types'

// second param required for testing
const isToday = (date: Date, today: Date): boolean =>
  moment(today).isSame(date, 'day')

// second param required for testing
const isTomorrow = (date: Date, today: Date): boolean =>
  moment(today)
    .add(1, 'day')
    .isSame(date, 'day')

const generateMultiDatePrefix = ({
  start,
  lastOccurrenceEnd,
  now,
}: {
  start: Date
  lastOccurrenceEnd: Date
  now: Date
}) =>
  `${generateSingleDatePrefix({ start, now })} - ${moment(
    lastOccurrenceEnd
  ).format('ddd, DD MMM')}`

const generateSingleDatePrefix = ({
  start,
  now,
}: {
  start: Date
  now: Date
}) => {
  const eventStartsToday = isToday(start, now)
  const eventStartsTomorrow = isTomorrow(start, now)
  return eventStartsToday || eventStartsTomorrow
    ? `${eventStartsToday ? 'Today' : 'Tomorrow'}`
    : `${moment(start).format('ddd, DD MMM')}`
}

export const checkTimesAreSame = (dates: EventDateOccurrence[]): boolean => {
  const startHours = new Date(dates[0].startDate).getHours()
  const startMins = new Date(dates[0].startDate).getMinutes()
  const endHours = new Date(dates[0].endDate).getHours()
  const endMins = new Date(dates[0].endDate).getMinutes()

  return dates.every(occurrence => {
    const occStartHours = new Date(occurrence.startDate).getHours()
    const occStartMins = new Date(occurrence.startDate).getMinutes()
    const occEndHours = new Date(occurrence.endDate).getHours()
    const occEndMins = new Date(occurrence.endDate).getMinutes()

    return (
      occStartHours === startHours &&
      occStartMins === startMins &&
      occEndHours === endHours &&
      occEndMins === endMins
    )
  })
}

export const generateDisplayDate = ({
  dates,
  now = new Date(),
}: {
  dates: EventDateOccurrence[]
  now?: Date
}) => {
  let prefix
  const filteredDates = dates.filter(occurrence =>
    filterPastEvents(occurrence.endDate, now)
  )

  const start = new Date(filteredDates[0].startDate)
  const end = new Date(filteredDates[0].endDate)
  const endsOnSameDay = isToday(start, end)
  const lastOccurrenceEnd = new Date(
    filteredDates[filteredDates.length - 1].endDate
  )

  if (filteredDates.length === 1 && endsOnSameDay) {
    prefix = generateSingleDatePrefix({
      start,
      now,
    })
  } else {
    prefix = generateMultiDatePrefix({
      start,
      lastOccurrenceEnd,
      now,
    })
  }
  return `${prefix}\u00A0\u00A0•\u00A0\u00A0${
    checkTimesAreSame(filteredDates)
      ? `${formatTime(filteredDates[0].startDate)} - ${formatTime(
          filteredDates[0].endDate
        )}`
      : 'See details for times'
  }`
}

export const formatLocation = ({
  platform,
  locationName,
  addressLine1,
}: {
  platform: string
  locationName: string
  addressLine1: string
}) =>
  isVirtualEvent(platform)
    ? platform
    : `${locationName}${addressLine1 ? `, ${addressLine1}` : ''}`
