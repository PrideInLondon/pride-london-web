import { StaticQuery, graphql } from 'gatsby'
import React from 'react'
import moment from 'moment'
import { getDuration, filterPastEvents } from '../features/events/helpers'
import constants from '../constants'
import FeaturedEvents from './FeaturedEvents'

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
          recurrenceDates
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
      const featuredEvents = events
        .map(event => {
          const originalStartTime = moment(event.node.startTime)

          const eventRecurrenceDates = event.node.recurrenceDates || []

          const recurrenceDates = eventRecurrenceDates
            .map(date => {
              const startTime = moment(date, constants.dateFormat)
                .hours(originalStartTime.hours())
                .minutes(originalStartTime.minutes())
                .toISOString()
              return moment(startTime)
                .add(
                  getDuration(event.node.startTime, event.node.endTime),
                  'ms'
                )
                .toISOString()
            })
            .filter(filterPastEvents)

          const startTime =
            recurrenceDates.length > 0 ? recurrenceDates[0] : originalStartTime

          const endTime = moment(startTime)
            .add(getDuration(event.node.startTime, event.node.endTime), 'ms')
            .toISOString()

          const customId =
            recurrenceDates.length > 0
              ? `${event.node.id}-${moment(startTime)
                  .format(constants.dateFormat)
                  .split('/')
                  .join('')}`
              : event.node.id

          return {
            node: {
              ...event.node,
              id: customId,
              startTime,
              endTime,
            },
          }
        })
        .filter(filterPastEvents)
        .sort((a, b) => new Date(a.node.startTime) - new Date(b.node.startTime))
      return <FeaturedEvents {...props} events={featuredEvents} />
    }}
  />
)

/**
 * @deprecated
 * This needs updated following Jira ticket EVE-2.
 * The way we handle event IDs has changed, specifically with recurring events.
 * We no longer rewrite the ID on a per occurrence basis, so there are multiple events existing with the same ID.
 * This will cause issues with the customId generation.
 * Point of contact: Em McDonald
 */
export default FeaturedEventsQuery
