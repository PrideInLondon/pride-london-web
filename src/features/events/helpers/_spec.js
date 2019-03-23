import { filterPastEvents } from '../helpers'

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const futureEvent = {
  node: {
    startTime: tomorrow,
  },
}

const pastEvent = {
  node: {
    startTime: yesterday,
  },
}

describe('filterPastEvents', () => {
  it('returns true if date is after today', () => {
    expect(filterPastEvents(futureEvent)).toBeTruthy()
  })

  it('returns false if date is in the past', () => {
    expect(filterPastEvents(pastEvent)).toBeFalsy()
  })
})
