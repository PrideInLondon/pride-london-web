export interface EventDateOccurrence {
  startDate: string
  endDate: string
  id: string
}

export interface ContentfulEvent {
  id: string
  name: string
  date: {
    dates: EventDateOccurrence[]
  }
  eventPriceLow: number
  eventCategories: string[]
  venueDetails: string | null
  audience: string[]
  accessibilityOptions: { [key in string]: string } | null
  onDemand: boolean
  location2: string
  locationName: string
  addressLine1: string | null
  postcode: string | null
  eventsListPicture: {
    title: string
    fixed: {
      base64: string
      width: number
      height: number
      src: string
      srcSet: string
      srcWebp: string
      srcSetWebp: string
    }
  }
}

export type ContentfulEventNode = {
  node: ContentfulEvent
}
