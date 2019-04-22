import React from 'react'
import Slider from 'react-slick'
import { Consumer } from '../../../../components/appContext'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { EventListingCard } from '../../../../features/events'
import { FlexColumn } from '../../../../components/grid'
import { settings } from './slickSettings'
import { FeaturedEventContent } from './styles'

const FeaturedEvents = () => (
  <Consumer>
    {context => (
      <FeaturedEventContent>
        <Slider {...settings}>
          {context.filteredEvents.map(event => (
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
      </FeaturedEventContent>
    )}
  </Consumer>
)

export default FeaturedEvents
