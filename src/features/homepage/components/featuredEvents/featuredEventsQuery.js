import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import FeaturedEvents from '.'

const query = graphql`
  query featuredEventsQuery {
    allContentfulEventsFeatured(filter: { title: { eq: "Home" } }) {
      edges {
        node {
          id
          title
          events {
            id
            name
            startTime
            endTime
            eventPriceLow
            eventsListPicture {
              title
              file {
                url
              }
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
    render={({
      allContentfulEventsFeatured: {
        edges: [
          {
            node: { events },
          },
        ],
      },
    }) => {
      const formattedEvents = events.map(node => {
        return { node }
      })
      return <FeaturedEvents {...props} events={formattedEvents} />
    }}
  />
)

export default FeaturedEventsQuery
