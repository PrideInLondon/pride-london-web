import moment from 'moment'
import slugify from 'slugify'
import UuidEncoder from 'uuid-encoder'
import constants from '../constants'

const encoder = new UuidEncoder('base62')

export const formatPrice = (eventPriceLow, eventPriceHigh) =>
  eventPriceLow === 0 && (eventPriceHigh === 0 || eventPriceHigh == null)
    ? 'Free'
    : `From £${eventPriceLow.toFixed(2).replace('.00', '')}`

export const formatTime = time => {
  return moment(time).format('mm') === '00'
    ? moment(time).format('ha')
    : moment(time).format('h:mma')
}

export function filterPastEvents(event) {
  const today = moment()
  return event.node && event.node.endTime
    ? moment(event.node.endTime).isSameOrAfter(today)
    : moment(event).isSameOrAfter(today) // assume event is date string if not event object
}

export const sortEventsByStartTime = (a, b) =>
  a.node.startTime - b.node.startTime

export function filterByLimit(event, index) {
  return index < this
}

export const momentizeRecurrenceDate = date => {
  const [day, month, year] = date.split('/')
  // Create moment date, note month is zero-based in js
  return moment(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)))
}

export function sanitizeDates(dates) {
  const formattedDates = dates.reduce((acc, date) => {
    const momentDate = momentizeRecurrenceDate(date)
    // Create array of valid dates
    return momentDate.isValid()
      ? [...acc, momentDate.format(constants.dateFormat)]
      : acc
  }, [])

  // Strip duplicates and return
  return Array.from(new Set([...formattedDates]))
}

export const getDuration = (start, end) => moment(end).diff(moment(start))

export const generateEventSlug = ({ id, name }) =>
  `/event/${slugify(name, {
    lower: true,
    remove: /[<>:"/\\|?*,'+]/g,
  })}-${encoder.encode(id)}/`

export const extractEventIdFromSlug = slug => {
  const [encodedId] = slug.split('-').slice(-1)
  return encoder.decode(encodedId.replace('/', ''))
}

export const calculateEndTime = ({ startTime, endTime, recurrenceDates }) => {
  if (!recurrenceDates) return endTime

  const lastOccurrence = momentizeRecurrenceDate(
    recurrenceDates[recurrenceDates.length - 1]
  )
  const originalStartTime = moment(startTime)
  const lastStartTime = lastOccurrence
    .hours(originalStartTime.hours())
    .minutes(originalStartTime.minutes())
    .toISOString()
  return moment(lastStartTime)
    .add(getDuration(startTime, endTime), 'ms')
    .toISOString()
}

/**
 * @param {object} Event
 * @param {string} platform This should come from the Event.location2 field
 */
export const isVirtualEvent = platform => platform !== 'In a physical location'
