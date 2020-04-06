import { eventCount } from './EventsPage'

describe('eventCount', () => {
  it('displays the correct number when less than 23 events are available', () => {
    const numberOfEventsToShow = 12
    const eventsLength = 12
    const actual = eventCount(numberOfEventsToShow, eventsLength)
    expect(actual).toBe(`You're viewing 12 of 12 events`)
  })

  it('displays the correct number when exactly 23 events are available', () => {
    const numberOfEventsToShow = 23
    const eventsLength = 23
    const actual = eventCount(numberOfEventsToShow, eventsLength)
    expect(actual).toBe(`You're viewing 23 of 23 events`)
  })
  it('displays the correct number when more than 23 events are available but are collapsed', () => {
    const numberOfEventsToShow = 23
    const eventsLength = 40
    const actual = eventCount(numberOfEventsToShow, eventsLength)
    expect(actual).toBe(`You're viewing 23 of 40 events`)
  })
  it('displays the correct number when more than 23 events are available and are expanded', () => {
    const numberOfEventsToShow = 46
    const eventsLength = 46
    const actual = eventCount(numberOfEventsToShow, eventsLength)
    expect(actual).toBe(`You're viewing 46 of 46 events`)
  })
})
