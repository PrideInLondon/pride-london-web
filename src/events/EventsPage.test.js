import { eventCount, checkNumberOfEventsToShow } from './EventsPage'

describe('checkNumberOfEventsToShow', () => {
  it('displays the correct number when less than 23 events are available', () => {
    const events = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
    ]
    const actual = checkNumberOfEventsToShow(events)
    expect(actual).toBe(8)
  })
  it('displays the correct number when exactly 23 events are available', () => {
    const events = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 21 },
      { id: 22 },
      { id: 23 },
    ]
    const actual = checkNumberOfEventsToShow(events)
    expect(actual).toBe(23)
  })
  it('displays the correct number when more than 23 events are available', () => {
    const events = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 },
      { id: 13 },
      { id: 14 },
      { id: 15 },
      { id: 16 },
      { id: 17 },
      { id: 18 },
      { id: 19 },
      { id: 20 },
      { id: 21 },
      { id: 22 },
      { id: 23 },
      { id: 24 },
      { id: 25 },
    ]
    const actual = checkNumberOfEventsToShow(events)
    expect(actual).toBe(23)
  })
})

describe('eventCount', () => {
  it('interpolates the number of events to show and the events', () => {
    const numberOfEventsToShow = 23
    const eventsLength = 45
    const actual = eventCount(numberOfEventsToShow, eventsLength)
    expect(actual).toBe(`You're viewing 23 of 45 events`)
  })
})
