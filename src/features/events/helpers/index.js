import moment from 'moment'
import slugify from 'slugify'
import UuidEncoder from 'uuid-encoder'
import constants from '../../../constants'

const encoder = new UuidEncoder('base62')

export const formatPrice = (eventPriceLow, eventPriceHigh) => {
  if (eventPriceLow === 0 && (eventPriceHigh === 0 || eventPriceHigh == null)) {
    return 'Free'
  }
  return `From £${eventPriceLow.toFixed(2).replace('.00', '')}`
}

export const formatTime = time => {
  if (moment(time).format('mm') === '00') {
    return moment(time).format('ha')
  }
  return moment(time).format('h:mma')
}

export const formatDate = event => {
  const startDate = moment(event.startTime).format('L')
  const endDate = moment(event.endTime).format('L')

  const startMonth = moment(event.startTime).format('MMM')
  const endMonth = moment(event.endTime).format('MMM')

  const startDay = moment(event.startTime).format('ddd D')
  const endDay = moment(event.endTime).format('ddd D')

  const startTime = formatTime(event.startTime)
  const endTime = formatTime(event.endTime)

  const dateTime = {
    time: `${startTime} - ${endTime}`,
  }

  const sameDay =
    startDate === endDate ||
    (moment(event.endTime).format('Hms') === '000' &&
      moment(event.endTime).diff(event.startTime, 'days') < 1)

  if (sameDay) {
    dateTime.date = `${startDay} ${startMonth}`
    return dateTime
  } else if (startMonth === endMonth) {
    dateTime.date = `${startDay} - ${endDay} ${startMonth}`
    return dateTime
  }

  dateTime.date = `${startDay} ${startMonth} - ${endDay} ${endMonth}`
  return dateTime
}

export function filterByDate(event) {
  if (!(this.startDate && this.endDate)) return true
  // Set time to 12:00 for pure date comparison
  return moment(event.node.startTime)
    .set({ hour: 12, minutes: 0 })
    .isBetween(this.startDate, this.endDate, null, '[]')
}

export function filterByFree(event) {
  if (!this.valueOf()) return true
  return event.node.eventPriceLow === 0
}

export function filterByCategory(event) {
  const { key } = this
  if (this.array.length === 0) return true

  return this.array.some(category => {
    if (Array.isArray(event.node[key])) {
      return event.node[key].indexOf(category) >= 0
    }
    return false
  })
}

export function filterByArea(event) {
  if (this.length === 0) return true

  if (typeof event.node.postcode === 'string') {
    let area
    const postcode = event.node.postcode.toLowerCase()
    switch (true) {
      case postcode.lastIndexOf('wc', 0) === 0 ||
        postcode.lastIndexOf('ec', 0) === 0:
        area = 'Central'
        break
      case postcode.lastIndexOf('w', 0) === 0:
        area = 'West'
        break
      case postcode.lastIndexOf('e', 0) === 0:
        area = 'East'
        break
      case postcode.lastIndexOf('s', 0) === 0:
        area = 'South'
        break
      case postcode.lastIndexOf('n', 0) === 0:
        area = 'North'
        break
      default:
        return false
    }
    return this.indexOf(area) !== -1
  }
  return false
}

export function filterByTime(event) {
  if (this.length === 0) return true
  const format = 'HH:mm'
  const startTime = moment(event.node.startTime).format(format)
  const afternoonStart = '12:00'
  const afternoonEnd = '17:59'

  let timeOfDay

  switch (true) {
    case startTime < afternoonStart:
      timeOfDay = 'Morning'
      break
    case startTime >= afternoonStart && startTime <= afternoonEnd:
      timeOfDay = 'Afternoon'
      break
    case startTime > afternoonEnd:
      timeOfDay = 'Evening'
      break
    default:
      return false
  }
  return this.indexOf(timeOfDay) !== -1
}

export function filterPastEvents(event) {
  const today = moment()
  if (event.node && event.node.endTime)
    return moment(event.node.endTime).isSameOrAfter(today)
  // Assume event is date string if not event object
  return moment(event).isSameOrAfter(today)
}

export function filterByLimit(event, index) {
  return index < this
}

export function sanitizeDates(dates) {
  const formattedDates = dates.reduce((acc, date) => {
    const [day, month, year] = date.split('/')

    // Create moment date, note month is zero-based in js
    const momentDate = moment(
      new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    )

    // Create array of valid dates
    return momentDate.isValid()
      ? [...acc, momentDate.format(constants.dateFormat)]
      : acc
  }, [])

  // Strip duplicates and return
  return Array.from(new Set([...formattedDates]))
}

export function getDuration(start, end) {
  return moment(end).diff(moment(start))
}

export const generateEventSlug = ({ id, name, occurrence }) =>
  `/event/${slugify(name, { lower: true })}${
    occurrence ? `-${moment(occurrence).format('DDMMYY')}` : ''
  }-${encoder.encode(id)}/`

export const extractEventIdFromSlug = slug => {
  const [encodedId] = slug.split('-').slice(-1)
  return encoder.decode(encodedId.replace('/', ''))
}
