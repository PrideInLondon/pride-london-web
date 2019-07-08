import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import { filterPastEvents } from '../../../events/helpers'
import FeaturedEvents from '.'

const query = graphql`
  query featuredEventsQuery {
    allContentfulEvent(filter: { featuredEvent: { eq: true } }) {
      events: edges {
        node {
          id
          name
          startTime
          endTime
          eventPriceLow
          eventsListPicture {
            title
            fixed(
              width: 400
              height: 235
              resizingBehavior: FILL
              quality: 90
              cropFocus: FACE
            ) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const FeaturedEventsQuery = props => (
  <StaticQuery
    query={query}
    render={({ allContentfulEvent: { events } }) => {
      const formattedEvents = events
        .filter(filterPastEvents)
        .map(event => ({ node: event.node }))
        .sort((a, b) => new Date(a.node.startTime) - new Date(b.node.startTime))
      return <FeaturedEvents {...props} events={formattedEvents} />
    }}
  />
)

export default FeaturedEventsQuery
