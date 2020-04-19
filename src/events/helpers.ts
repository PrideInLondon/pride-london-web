import moment, { Moment } from 'moment'
import momentTz from 'moment-timezone'
import slugify from 'slugify'
import UuidEncoder from 'uuid-encoder'
import constants from '../constants'
import { ContentfulEvent } from './eventListingCard/EventListingCard.types'

const encoder = new UuidEncoder('base62')

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
  momentTz(isoDate)
    .tz('Europe/London')
    .format(format)

/**
 *
 * @param date ISO Date String
 */
export const formatShortTime = (date: string): string =>
  formatTime(date, 'h:mma').replace(':00', '')

/**
 *
 * @param {string} date - ISO Date String
 */
export function filterPastEvents(date: string): boolean {
  const today = moment()
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

export const momentizeRecurrenceDate = (date: string): Moment => {
  const [day, month, year] = date.split('/')
  // Create moment date, note month is zero-based in js
  return moment(new Date(parseInt(year), parseInt(month) - 1, parseInt(day)))
}

export function sanitizeDates(dates: string[]) {
  const formattedDates = dates.reduce(
    (acc: string[], date: string): string[] => {
      const momentDate = momentizeRecurrenceDate(date)
      // Create array of valid dates
      return momentDate.isValid()
        ? [...acc, momentDate.format(constants.dateFormat)]
        : acc
    },
    []
  )

  // Strip duplicates and return
  return Array.from(new Set([...formattedDates]))
}

export const getDuration = (start: string, end: string) =>
  moment(end).diff(moment(start))

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
