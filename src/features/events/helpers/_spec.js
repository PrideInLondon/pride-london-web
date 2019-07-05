import {
  filterPastEvents,
  formatDate,
  getDuration,
  sanitizeDates,
} from '../helpers'

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const futureEvent = {
  node: {
    endTime: tomorrow,
  },
}

const pastEvent = {
  node: {
    endTime: yesterday,
  },
}

const eventOneDay = {
  startTime: '2019-06-03T06:00+00:00',
  endTime: '2019-06-03T08:00+00:00',
}

const eventTwoDays = {
  startTime: '2019-06-03T08:00+00:00',
  endTime: '2019-06-04T11:30+00:00',
}

describe('filterPastEvents', () => {
  it('returns true if date is after today', () => {
    expect(filterPastEvents(futureEvent)).toBeTruthy()
  })

  it('returns false if date is in the past', () => {
    expect(filterPastEvents(pastEvent)).toBeFalsy()
  })

  it('returns true if date is after today and object is date string', () => {
    expect(filterPastEvents(futureEvent.node.endTime)).toBeTruthy()
  })

  it('format 1-day event date properly', () => {
    const date = formatDate(eventOneDay)
    const expectedDate = 'Mon 3 Jun'

    expect(date.date).toBe(expectedDate)
  })

  it('format multi-days event date properly', () => {
    const date = formatDate(eventTwoDays)
    const expectedDate = 'Mon 3 - Tue 4 Jun'
    expect(date.date).toBe(expectedDate)
  })

  it('returns 1 day as diff', () => {
    const date = getDuration('2019-06-03T08:00+00:00', '2019-06-04T08:00+00:00')
    expect(date).toBe(24 * 60 * 60 * 1000)
  })

  it('returns sanitized dates', () => {
    const dates = ['1/3/2019', '12/12/2019']
    const expectedDates = ['01/03/2019', '12/12/2019']
    expect(sanitizeDates(dates)).toEqual(expectedDates)
  })
})
