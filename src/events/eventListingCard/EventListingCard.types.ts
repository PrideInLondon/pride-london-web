import { ResponsiveValue } from 'styled-system'
interface EventDateOccurence {
  startDate: string
  endDate: string
}
export interface ContentfulEvent {
  id: string
  name: string
  eventsListPicture: any
  startTime: string
  endTime: string
  recurrenceDates: string[]
  location2: string
  locationName: string
  addressLine1: string
  eventPriceLow: number
  date: {
    dates: EventDateOccurence[]
  }
}

export interface EventListingCardProps {
  event: ContentfulEvent
  variant: ResponsiveValue<'column' | 'row'>
}

export interface WhenProps {
  /** Start time in format YYYY-MM-DDTHH:mm+HH:mm */
  startTime: string
  /** End time in format YYYY-MM-DDTHH:mm+HH:mm */
  endTime: string
  recurrenceDates: string[]
  dates: EventDateOccurence[]
}
