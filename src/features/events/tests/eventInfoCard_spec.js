import React from 'react'
import { shallow } from 'enzyme'
import EventInfoCard from '../components/eventInfoCard'

describe(EventInfoCard.name, () => {
  const event = {
    data: {
      locationName: 'Test',
      eventPriceLow: 20,
    },
    pageContext: {
      id: 'test-1',
      startTime: '2006-06-02T13:30+01:00',
      endTime: '2006-06-03T13:30+01:00',
    },
  }

  const event2 = {
    data: {
      locationName: 'Test',
      eventPriceLow: 20,
    },
    pageContext: {
      id: 'test-1',
      startTime: '2006-06-02T13:30+01:00',
      endTime: '2006-06-02T13:30+01:00',
    },
  }

  it('renders correctly', () => {
    const wrapper = shallow(<EventInfoCard {...event} />)
    expect(wrapper).toMatchSnapshot()
  })

  it('1 day event renders correctly', () => {
    const wrapper = shallow(<EventInfoCard {...event2} />)
    expect(wrapper).toMatchSnapshot()
  })
})
