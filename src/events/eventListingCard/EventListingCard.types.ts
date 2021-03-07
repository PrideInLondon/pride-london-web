import { ResponsiveValue } from 'styled-system'
import { ContentfulEvent, EventDateOccurrence } from '../event/EventPride.types'

export interface EventListingCardProps {
  event: ContentfulEvent
  variant?: ResponsiveValue<'column' | 'row'>
}

export interface WhenProps {
  onDemand: boolean
  platform: string
  dates: EventDateOccurrence[]
}
