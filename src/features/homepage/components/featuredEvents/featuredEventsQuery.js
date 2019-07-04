import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import moment from 'moment'
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
        .map(event => ({ node: event.node }))
        .filter(event => moment(event.endTime).isSameOrAfter(moment()))
      return <FeaturedEvents {...props} events={formattedEvents} />
    }}
  />
)

export default FeaturedEventsQuery
