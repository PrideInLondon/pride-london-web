import React from 'react'
import { ContentfulEventNode } from '../events/event/EventPride.types'

const EventsContext = React.createContext<ContentfulEventNode[]>([])

export default EventsContext
