const moment = require('moment')
const { dateFormat } = require('../../../constants')

const formatTime = time => {
  if (moment(time).format('mm') === '00') {
    return moment(time).format('ha')
  }
  return moment(time).format('h:mma')
}

const formatDate = event => {
  const year = moment(event.startTime).year()

  const startDate = moment(event.startTime).format('L')
  const endDate = moment(event.endTime).format('L')

  const startMonth = moment(event.startTime).format('MMM')
  const endMonth = moment(event.endTime).format('MMM')

  const startDay = moment(event.startTime).date()
  const endDay = moment(event.endTime).date()

  const startTime = formatTime(event.startTime)
  const endTime = formatTime(event.endTime)

  const dateTime = {
    time: `${startTime} - ${endTime}`,
  }

  if (startDate === endDate) {
    dateTime.date = `${startDay} ${startMonth} ${year}`
    return dateTime
  } else if (startMonth === endMonth) {
    dateTime.date = `${startDay} - ${endDay} ${startMonth} ${year}`
    return dateTime
  }

  dateTime.date = `${startDay} ${startMonth} - ${endDay} ${endMonth} ${year}`
  return dateTime
}

function filterByDate(event) {
  if (!(this.startDate && this.endDate)) return true
  // Set time to 12:00 for pure date comparison
  return moment(event.node.startTime)
    .set({ hour: 12, minutes: 0 })
    .isBetween(this.startDate, this.endDate, null, '[]')
}

function filterByFree(event) {
  if (!this.valueOf()) return true
  return event.node.eventPriceLow === 0
}

function filterByCategory(event) {
  const { key } = this
  if (this.array.length === 0) return true

  return this.array.some(category => {
    if (Array.isArray(event.node[key])) {
      return event.node[key].indexOf(category) >= 0
    }
    return false
  })
}

function filterByArea(event) {
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

function filterByTime(event) {
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

function filterPastEvents(event) {
  const today = moment()
  if (event.node && event.node.startTime)
    return moment(event.node.startTime).isSameOrAfter(today)
  // Assume event is date string if not event object
  return moment(event, 'DD/MM/YYYY').isSameOrAfter(today)
}

function filterByLimit(event, index) {
  return index < this
}

function sanitizeDates(dates) {
  const formattedDates = []
  dates.map(date => {
    const [day, month, year] = date.split('/')

    // Format date to be DD/MM/YYYY
    const formattedDate = `${day.length === 1 ? `0${day}` : day}/${
      month.length === 1 ? `0${month}` : month
    }/${year.length === 2 ? `20${year}` : year}`

    // Create array of valid dates
    if (moment(formattedDate, dateFormat).isValid()) {
      formattedDates.push(formattedDate)
    }
  })
  // Strip duplicates and return
  return Array.from(new Set([...formattedDates]))
}

function getDuration(start, end) {
  return moment(end).diff(moment(start))
}

module.exports = {
  formatDate,
  formatTime,
  filterByDate,
  filterByFree,
  filterByCategory,
  filterByArea,
  filterByTime,
  filterPastEvents,
  filterByLimit,
  sanitizeDates,
  getDuration,
}
