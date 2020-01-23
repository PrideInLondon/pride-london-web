import moment from 'moment'

// second param required for testing
const isToday = (date: Date, today: Date) => moment(today).isSame(date, 'day')

// second param required for testing
const isTomorrow = (date: Date, today: Date) =>
  moment(today)
    .add(1, 'day')
    .isSame(date, 'day')

export const generateDisplayDate = ({
  start,
  end,
  now = new Date(), // note that this param should only be used for testing
}: {
  start: Date
  end: Date
  now?: Date
}) => {
  const startMoment = moment(start)
  const endMoment = moment(end)

  const eventIsToday = isToday(start, now)
  const eventIsTomorrow = isTomorrow(start, now)

  // Today • HH:mm - HH:mm (events occurring today)
  // Tomorrow • HH:mm - HH:mm (events occurring tomorrow)
  // ddd, DD MMM • HH:mm - HH:mm (events occurring in 2 or more days)
  return `${
    eventIsToday || eventIsTomorrow
      ? `${eventIsToday ? 'Today' : 'Tomorrow'}`
      : `${startMoment.format('ddd, DD MMM')}`
  }\u00A0\u00A0•\u00A0\u00A0${startMoment.format('HH:mm')} - ${endMoment.format(
    'HH:mm'
  )}`
}
