import moment from 'moment'

// second param required for testing
const isToday = (date: Date, today: Date) => moment(today).isSame(date, 'day')

// second param required for testing
const isTomorrow = (date: Date, today: Date) =>
  moment(today)
    .add(1, 'day')
    .isSame(date, 'day')

// second param required for testing
const isBefore = (date: Date, today: Date) => date < today

export const generateDisplayDate = ({
  start,
  end,
  occurrences,
  now = new Date(), // note that this param should only be used for testing
}: {
  start: Date
  end: Date
  occurrences?: Date[]
  now?: Date
}) => {
  if (!occurrences) {
    const startMoment = moment(start)
    const endMoment = moment(end)

    const eventIsToday = isToday(start, now)
    const eventIsTomorrow = isTomorrow(start, now)

    if (eventIsToday || eventIsTomorrow)
      return `${eventIsToday ? 'Today' : 'Tomorrow'} • ${startMoment.format(
        'HH:mm'
      )} - ${endMoment.format('HH:mm')}`

    return startMoment.format('MMM DD')
  }

  const [firstOccurrence] = occurrences
  const lastOccurrence = occurrences[occurrences.length - 1]

  const lastMoment = moment(lastOccurrence)
  if (isBefore(firstOccurrence, now)) {
    return `Until ${lastMoment.format('MMM DD')}`
  }

  const firstMoment = moment(firstOccurrence)
  return `${firstMoment.format('MMM DD')} - ${lastMoment.format('MMM DD')}`
}
