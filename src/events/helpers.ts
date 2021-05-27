import moment from 'moment'
import momentTz from 'moment-timezone'
import slugify from 'slugify'
import UuidEncoder from 'uuid-encoder'
import {
  ContentfulEvent,
  EventDateOccurrence,
} from './eventListingCard/EventListingCard.types'

const encoder = new UuidEncoder('base62')

export const changeTimeZone = (
  date: Date,
  timeZone = 'Europe/London'
): Date => {
  const dateWithTimeZone = new Date(
    date.toLocaleString('en-GB', {
      timeZone,
    })
  )

  const diff = date.getTime() - dateWithTimeZone.getTime()
  return new Date(date.getTime() + diff)
}

export const formatPrice = (
  eventPriceLow: number,
  eventPriceHigh: number
): string =>
  eventPriceLow === 0 && (eventPriceHigh === 0 || eventPriceHigh == null)
    ? 'Free'
    : `From £${eventPriceLow.toFixed(2).replace('.00', '')}`

/**
 * @param {string} isoDate Date in format YYYY-MM-DDTHH:mm+HH:mm
 * @param {string} [format] Optional time format, default is HH:mm
 */
export const formatTime = (isoDate: string, format = 'HH:mm'): string =>
  momentTz(isoDate).tz('Europe/London').format(format)

/**
 *
 * @param date ISO Date String
 */
export const formatShortTime = (date: string): string =>
  formatTime(date, 'h:mma').replace(':00', '')

/**
 *
 * @param {string} date - ISO Date String
 * @param {Date} now - date object, param needed for testing
 */
export function filterPastEvents(date: string, now = new Date()): boolean {
  const today = moment(now)
  return moment(date).isSameOrAfter(today)
}

interface EventNode {
  node: Pick<ContentfulEvent, 'date'>
}

/**
 *
 * @param {object} a Event object from contentful
 * @param {object} b Event object from contentful
 */
export const sortEventsByStartTime = (a: EventNode, b: EventNode) =>
  new Date(a.node.date.dates[0].startDate).valueOf() -
  new Date(b.node.date.dates[0].startDate).valueOf()

export function filterByLimit(this: number, _event: any, index: number) {
  return index < this
}

export const generateEventSlug = ({
  id,
  name,
}: {
  id: string
  name: string
}): string =>
  `/event/${slugify(name, {
    lower: true,
    remove: /[<>:"/\\|?*,'+]/g,
  })}-${encoder.encode(id)}/`

export const extractEventIdFromSlug = (slug: string): string => {
  const [encodedId] = slug.split('-').slice(-1)
  return encoder.decode(encodedId.replace('/', ''))
}

/**
 * @param {object} Event
 * @param {string} platform This should come from the Event.location2 field
 */
export const isVirtualEvent = (platform: string): boolean =>
  platform !== 'In a physical location'

export function sortByNextOccurrence(
  a: EventNode,
  b: EventNode,
  now: Date = new Date()
): number {
  const aDates = a.node.date.dates.filter((date) =>
    filterPastEvents(date.endDate, now)
  )
  const bDates = b.node.date.dates.filter((date) =>
    filterPastEvents(date.endDate, now)
  )

  if (new Date(aDates[0].startDate) >= new Date(bDates[0].startDate)) return 1
  return -1
}

export const formatUpcomingDates = ({
  startDate,
  endDate,
}: {
  startDate: string
  endDate: string
}): string => {
  const start = new Date(startDate)
  const end = new Date(endDate)
  if (moment(start).isSame(end, 'day')) {
    return moment(start).format('ddd, DD MMM')
  }
  return `${moment(start).format('ddd, DD MMM')} - ${moment(end).format(
    'ddd, DD MMM'
  )}`
}

export const isRecurringEvent = ({
  date: { dates },
}: {
  date: { dates: EventDateOccurrence[] }
}) => dates && dates.length > 1

export const isLiveNow = (
  { startDate, endDate }: EventDateOccurrence,
  now?: string //param needed for testing
) =>
  (now ? moment(now) : moment()).isBetween(moment(startDate), moment(endDate))
