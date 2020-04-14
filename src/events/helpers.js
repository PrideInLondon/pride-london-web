import moment from 'moment'
import momentTz from 'moment-timezone'
import slugify from 'slugify'
import UuidEncoder from 'uuid-encoder'
import constants from '../constants'

const encoder = new UuidEncoder('base62')

export const formatPrice = (eventPriceLow, eventPriceHigh) =>
  eventPriceLow === 0 && (eventPriceHigh === 0 || eventPriceHigh == null)
    ? 'Free'
    : `From £${eventPriceLow.toFixed(2).replace('.00', '')}`

/**
 * @param {string} isoDate Date in format YYYY-MM-DDTHH:mm+HH:mm
 * @param {string} [format] Optional time format, default is HH:mm
 */
export const formatTime = (isoDate, format = 'HH:mm') =>
  momentTz(isoDate)
    .tz('Europe/London')
    .format(format)

export const formatShortTime = date =>
  formatTime(date, 'h:mma').replace(':00', '')

export function filterPastEvents(event) {
  const today = moment()
  return moment(date).isSameOrAfter(today)
}

/**
 *
 * @param {object} a Event object from contentful
 * @param {object} b Event object from contentful
 */
export const sortEventsByStartTime = (a, b) =>
  a.node.date.dates[0].startDate - b.node.date.dates[0].startDate

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

/**
 * @param {object} Event
 * @param {string} platform This should come from the Event.location2 field
 */
export const isVirtualEvent = platform => platform !== 'In a physical location'
