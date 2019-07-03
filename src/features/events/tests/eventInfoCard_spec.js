import React from 'react'
import { mount } from 'enzyme'
import EventInfoCard from '../components/eventInfoCard'
import { mockEvents } from './_mocks'

describe(EventInfoCard.name, () => {
  it('renders correctly', () => {
    const wrapper = mount(<EventInfoCard {...mockEvents[0]} />)
    expect(
      wrapper
        .find('eventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006 to Saturday 3 June 2006')
  })

  it('1 day event renders correctly', () => {
    const wrapper = mount(<EventInfoCard {...mockEvents[1]} />)
    expect(
      wrapper
        .find('eventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006')
  })
})
