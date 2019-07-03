import React from 'react'
import { mount } from 'enzyme'
import EventInfoCard from '../components/eventInfoCard'

describe(EventInfoCard.name, () => {
  const event = {
    data: {
      locationName: 'Test',
      eventPriceLow: 20,
    },
    pageContext: {
      id: 'test-1',
      startTime: '2006-06-02T13:30+00:00',
      endTime: '2006-06-03T13:30+00:00',
    },
  }

  const event2 = {
    data: {
      locationName: 'Test',
      eventPriceLow: 20,
    },
    pageContext: {
      id: 'test-1',
      startTime: '2006-06-02T13:30+00:00',
      endTime: '2006-06-02T13:30+00:00',
    },
  }

  it('renders correctly', () => {
    const wrapper = mount(<EventInfoCard {...event} />)
    expect(
      wrapper
        .find('eventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006 to Saturday 3 June 2006')
  })

  it('1 day event renders correctly', () => {
    const wrapper = mount(<EventInfoCard {...event2} />)
    expect(
      wrapper
        .find('eventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006')
  })
})
