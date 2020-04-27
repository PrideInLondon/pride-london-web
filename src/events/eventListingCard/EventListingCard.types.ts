import { ResponsiveValue } from 'styled-system'
export interface EventDateOccurrence {
  startDate: string
  endDate: string
  id: string
}
export interface ContentfulEvent {
  id: string
  name: string
  eventsListPicture: any
  location2: string
  locationName: string
  addressLine1: string
  eventPriceLow: number
  date: {
    dates: EventDateOccurrence[]
  }
}

export interface EventListingCardProps {
  event: ContentfulEvent
  variant: ResponsiveValue<'column' | 'row'>
}

export interface WhenProps {
  dates: EventDateOccurrence[]
}
