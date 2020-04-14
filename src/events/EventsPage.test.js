import { eventCount, checkNumberOfEventsToShow } from './EventsPage'

describe('checkNumberOfEventsToShow', () => {
  const generateArray = number =>
    Array.from(Array(number).keys()).map(num => ({ id: num }))
  it.each`
    count | expected
    ${0}  | ${0}
    ${8}  | ${8}
    ${23} | ${23}
    ${24} | ${23}
  `('should return $expected when given $count', ({ count, expected }) => {
    const events = generateArray(count)
    const actual = checkNumberOfEventsToShow(events)
    expect(actual).toBe(expected)
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
