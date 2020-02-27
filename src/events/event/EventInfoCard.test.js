import React from 'react'
import { mount } from 'enzyme'
import { mockEvents } from '../__mocks__'
import EventInfoCard from './EventInfoCard'

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
