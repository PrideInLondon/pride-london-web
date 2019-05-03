import React from 'react'
import Slider from 'react-slick'
import { graphql, StaticQuery } from 'gatsby'
import { EventListingCard } from '../../../../features/events'
import { FlexColumn } from '../../../../components/grid'
import { settings } from './slickSettings'
import { FeaturedEventContent } from './styles'

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

const FeaturedEvents = () => (
  <FeaturedEventContent>
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
        return (
          <Slider {...settings}>
            {events
              .map(node => {
                return { node }
              })
              .map(event => (
                <FlexColumn
                  width={[
                    1, // 100% between 0px screen width and first breakpoint (375px)
                    1, // 100% between first breakpoint(375px) and second breakpoint (768px)
                    1 / 2, // 50% between second breakpoint(768px) and third breakpoint (1024px)
                    1 / 3, // 33% between third breakpoint(1280px) and fourth breakpoint (1440px)
                  ]}
                  key={`${event.node.id}${event.node.name}`}
                >
                  <EventListingCard displaycolumn event={event.node} />
                </FlexColumn>
              ))}
          </Slider>
        )
      }}
    />
  </FeaturedEventContent>
)

export default FeaturedEvents
