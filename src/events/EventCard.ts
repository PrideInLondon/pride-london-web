import moment from 'moment'

// second param required for testing
const isToday = (date: Date, today: Date) => moment(today).isSame(date, 'day')

// second param required for testing
const hasAlreadyStarted = (date: Date, today: Date) => date < today

// second param required for testing
const isTomorrow = (date: Date, today: Date) =>
  moment(today)
    .add(1, 'day')
    .isSame(date, 'day')

const generateMultiDatePrefix = ({
  start,
  lastOccurrence,
  now,
}: {
  start: Date
  lastOccurrence: Date
  now: Date
}) =>
  `${generateSingleDatePrefix({ start, now })} - ${moment(
    lastOccurrence
  ).format('ddd, DD MMM')}`

const generateSingleDatePrefix = ({
  start,
  now,
}: {
  start: Date
  now: Date
}) => {
  const eventHasStartedOrStartsToday =
    isToday(start, now) || hasAlreadyStarted(start, now)
  const eventStartsTomorrow = isTomorrow(start, now)
  return eventHasStartedOrStartsToday || eventStartsTomorrow
    ? `${eventHasStartedOrStartsToday ? 'Today' : 'Tomorrow'}`
    : `${moment(start).format('ddd, DD MMM')}`
}

export const generateDisplayDate = ({
  start,
  end,
  lastOccurrence,
  now = new Date(), // note that this param should only be used for testing
}: {
  start: Date
  end: Date
  lastOccurrence: Date
  now?: Date
}) => {
  const prefix = lastOccurrence
    ? generateMultiDatePrefix({ start, lastOccurrence, now })
    : generateSingleDatePrefix({ start, now })

  // Today • HH:mm - HH:mm (events occurring today)
  // Tomorrow • HH:mm - HH:mm (events occurring tomorrow)
  // ddd, DD MMM • HH:mm - HH:mm (events occurring in 2 or more days)

  // Today - ddd, DD MMM  • HH:mm - HH:mm (recurring event series already started or starting today)
  // Tomorrow - ddd, DD MMM • HH:mm - HH:mm (recurring event series beginning tomorrow)
  // ddd, DD MMM - ddd, DD MMM • HH:mm - HH:mm (recurring event series beginning in 2 or more days)
  return `${prefix}\u00A0\u00A0•\u00A0\u00A0${moment(start).format(
    'HH:mm'
  )} - ${moment(end).format('HH:mm')}`
}
