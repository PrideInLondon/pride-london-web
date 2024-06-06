import { EventDateOccurrence } from '../eventListingCard/EventListingCard.types'

export interface LiveItemProps {
  endDate: string
}

export interface ItemProps {
  title?: string
  icon: any
  detail?: string | any
  url?: string | any

}

export interface WhenProps {
  onDemand: boolean
  platform: string
  dates: EventDateOccurrence[]
  startDate: string
  endDate: string
}

export interface LocationProps {
  platform: string
  locationName: string
  addressLine1: string
  addressLine2: string
  city: string
  postcode: string
}

export interface EventInfoCardProps {
  data: {
    location2: string
    onDemand: boolean
    locationName: string
    addressLine1: string
    addressLine2: string
    city: string
    postcode: string
    eventPriceLow: number
    eventPriceHigh: number
    email: string
    phone: string
    ticketingUrl: string
    cta: string
    accessibilityOptions: string[]
    venueDetails: string[]
    date: {
      dates: EventDateOccurrence[]
    }
  }
  pageContext: EventDateOccurrence
}
