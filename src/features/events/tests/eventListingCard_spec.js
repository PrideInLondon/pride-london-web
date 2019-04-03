import React from 'react'
import { shallow } from 'enzyme'
import EventListingCard from '../components/eventListingCard'

describe('The Events You May Like component', () => {
  const mockProps = {
    event: {
      id: '1234',
      name: 'name',
      eventPriceLow: 33,
      eventsListPicture: {
        file: {
          url: '/url-example',
        },
        title: 'title',
      },
      node: {
        startTime: new Date(),
      },
      time: new Date(),
    },
  }

  it('should matchsnapshot', () => {
    const wrapper = shallow(<EventListingCard {...mockProps} />)

    expect(wrapper).toMatchSnapshot()
  })
})
