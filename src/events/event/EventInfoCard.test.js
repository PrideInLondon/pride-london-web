import React from 'react'
import { mount } from 'enzyme'
import { mockEvents } from '../__mocks__'
import EventInfoCard, { formatDayRange } from './EventInfoCard'

describe(EventInfoCard.name, () => {
  it('renders correctly', () => {
    const wrapper = mount(<EventInfoCard {...mockEvents[0]} />)
    expect(
      wrapper
        .find('EventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006 to Saturday 3 June 2006')
  })

  it('1 day event renders correctly', () => {
    const wrapper = mount(<EventInfoCard {...mockEvents[1]} />)
    expect(
      wrapper
        .find('EventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006')
  })
})

describe('formatDayRange', () => {
  it('should render a range of dates if the event is recurring', () => {
    const startTime = '2020-03-04T00:00:00.000Z'
    const endTime = '2020-03-12T00:00:00.000Z'
    const expected = 'Wednesday 4 March 2020 to Thursday 12 March 2020'
    const actual = formatDayRange({ startTime, endTime })
    expect(actual).toEqual(expected)
  })

  it('should render a single date if the event is non-recurring', () => {
    const startTime = '2020-03-04T00:00:00.000Z'
    const endTime = '2020-03-04T01:00:00.000Z'
    const expected = 'Wednesday 4 March 2020'
    const actual = formatDayRange({ startTime, endTime })
    expect(actual).toEqual(expected)
  })
})
