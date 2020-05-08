import {
  formatTime,
  formatShortTime,
  filterPastEvents,
  getDuration,
  sanitizeDates,
  generateEventSlug,
  extractEventIdFromSlug,
  sortEventsByStartTime,
  isVirtualEvent,
  sortByNextOccurrence,
  changeTimeZone,
  formatUpcomingDates,
} from './helpers'

const yesterday = new Date()
yesterday.setDate(yesterday.getDate() - 1)

const tomorrow = new Date()
tomorrow.setDate(tomorrow.getDate() + 1)

const today = new Date()

const addDays = (date, days) => {
  const datePlusDays = new Date(date)
  datePlusDays.setDate(date.getDate() + days)
  return datePlusDays
}

describe('formatTime', () => {
  it.each`
    date                        | expected
    ${'2020-01-01T09:30+00:00'} | ${'09:30' /* 1st January 2020 09:30 UTC */}
    ${'2020-06-01T09:30+00:00'} | ${'10:30' /* 1st June 2020 09:30 UTC */}
    ${'2020-06-01T09:30+01:00'} | ${'09:30' /* 1st June 2020 09:30 BST */}
    ${'2020-06-01T09:30+01:00'} | ${'09:30' /* 1st June 2020 09:30 BST */}
  `(
    'should format time $date as $expected according to current London timezone',
    ({ date, expected }) => {
      const actual = formatTime(date)
      expect(actual).toEqual(expected)
    }
  )

  it.each`
    date                        | expected
    ${'2020-01-01T09:30+00:00'} | ${'9:30am'}
    ${'2020-01-01T19:30+00:00'} | ${'7:30pm'}
  `(
    'should format time $date with requested override format when supplied',
    ({ date, expected }) => {
      const actual = formatTime(date, 'h:mma')
      expect(actual).toEqual(expected)
    }
  )
})

describe('formatShortTime', () => {
  it.each`
    date                          | expected
    ${'2020-01-01T09:30:00.000Z'} | ${'9:30am'}
    ${'2020-01-01T09:00:00.000Z'} | ${'9am'}
    ${'2020-01-01T20:45:00.000Z'} | ${'8:45pm'}
    ${'2020-01-01T20:00:00.000Z'} | ${'8pm'}
  `(
    'should render time as $expected when date is $date',
    ({ date, expected }) => {
      const actual = formatShortTime(date)
      expect(actual).toEqual(expected)
    }
  )
})

describe('filterPastEvents', () => {
  it('returns true if date is after today', () => {
    expect(filterPastEvents(tomorrow.toISOString())).toBeTruthy()
  })

  it('returns false if date is in the past', () => {
    expect(filterPastEvents(yesterday.toISOString())).toBeFalsy()
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

describe('sortEventsByStartTime', () => {
  it('sorts dates by start time to earliest first', () => {
    const dates = Array(5)
      .fill(0)
      .map((_, index) => ({
        node: { date: { dates: [{ startDate: new Date(index) }] } },
      }))
    const actual = [dates[2], dates[0], dates[4], dates[3], dates[1]].sort(
      sortEventsByStartTime
    )
    expect(actual).toEqual(dates)
  })
})

describe('generateEventSlug', () => {
  it.each`
    id                                        | name           | expected
    ${'cfaa55ae-9d84-4cac-bb3e-1bb84bd8ba0e'} | ${'foo'}       | ${'/event/foo-6JrFngCyUZYHYY1Ay5ddWQ/'}
    ${'9c84548d-5a59-4c59-ad6f-3f1d898ba001'} | ${'foo-bar'}   | ${'/event/foo-bar-4lLHF5FUWwwHcy0A07KGMT/'}
    ${'b2ff5bf6-20e5-491f-9706-8819f679ad7e'} | ${'foo - bar'} | ${'/event/foo-bar-5RlKgiwNHXaWUkY7jck19y/'}
    ${'a5a53094-22b6-4d38-b856-bd8fb6e005ff'} | ${'Foo: Bar'}  | ${'/event/foo-bar-52ZE0IY5o9ABOqlQ7DtdPT/'}
  `(
    'should generate a URL-friendly slug for event with id $id and name $name',
    ({ id, name, expected }) => {
      const actual = generateEventSlug({ id, name })
      expect(actual).toEqual(expected)
    }
  )
})

describe('extractEventIdFromSlug', () => {
  it.each`
    slug                                        | expected
    ${'/event/foo-6JrFngCyUZYHYY1Ay5ddWQ/'}     | ${'cfaa55ae-9d84-4cac-bb3e-1bb84bd8ba0e'}
    ${'/event/foo-bar-4lLHF5FUWwwHcy0A07KGMT/'} | ${'9c84548d-5a59-4c59-ad6f-3f1d898ba001'}
    ${'/event/foo-bar-5RlKgiwNHXaWUkY7jck19y/'} | ${'b2ff5bf6-20e5-491f-9706-8819f679ad7e'}
    ${'/event/foo-bar-52ZE0IY5o9ABOqlQ7DtdPT/'} | ${'a5a53094-22b6-4d38-b856-bd8fb6e005ff'}
  `(
    'should decode the event id from generated URL-friendly slug with slug $slug',
    ({ slug, expected }) => {
      const actual = extractEventIdFromSlug(slug)
      expect(actual).toEqual(expected)
    }
  )
})

describe('isVirtualEvent', () => {
  it.each`
    platform                    | expected
    ${'In a physical location'} | ${false}
    ${null}                     | ${true}
    ${'foo'}                    | ${true}
  `(
    'should return $expected when platform is $location2',
    ({ platform, expected }) => {
      const actual = isVirtualEvent(platform)
      expect(actual).toEqual(expected)
    }
  )
})

describe('sortByNextOccurrence', () => {
  const events = [
    {
      node: {
        id: 'event1',
        date: {
          dates: [
            {
              id: 'test1',
              startDate: changeTimeZone(yesterday).toISOString(),
              endDate: changeTimeZone(yesterday).toISOString(),
            },
            {
              id: 'test2',
              startDate: changeTimeZone(tomorrow).toISOString(),
              endDate: changeTimeZone(tomorrow).toISOString(),
            },
            {
              id: 'test3',
              startDate: changeTimeZone(addDays(today, 2)).toISOString(),
              endDate: changeTimeZone(addDays(today, 2)).toISOString(),
            },
          ],
        },
      },
    },
    {
      node: {
        id: 'event2',
        date: {
          dates: [
            {
              id: 'test4',
              startDate: changeTimeZone(yesterday).toISOString(),
              endDate: changeTimeZone(yesterday).toISOString(),
            },
            {
              id: 'test5',
              startDate: changeTimeZone(today).toISOString(),
              endDate: changeTimeZone(today).toISOString(),
            },
            {
              id: 'test6',
              startDate: changeTimeZone(tomorrow).toISOString(),
              endDate: changeTimeZone(tomorrow).toISOString(),
            },
          ],
        },
      },
    },
    {
      node: {
        id: 'event3',
        date: {
          dates: [
            {
              id: 'test7',
              startDate: changeTimeZone(yesterday).toISOString(),
              endDate: changeTimeZone(tomorrow).toISOString(),
            },
          ],
        },
      },
    },
  ]

  it('should sort the events in order event3, event2, event1', () => {
    const sortedEvents = events.sort((a, b) =>
      sortByNextOccurrence(a, b, changeTimeZone(today))
    )
    expect(sortedEvents[0].node.id).toBe('event3')
    expect(sortedEvents[1].node.id).toBe('event2')
    expect(sortedEvents[2].node.id).toBe('event1')
  })
})

describe('formatUpcomingDates', () => {
  it.each`
    startDate                     | endDate                       | expected
    ${'2020-01-01T09:30:00.000Z'} | ${'2020-01-01T09:30:00.000Z'} | ${'Wed, 01 Jan'}
    ${'2020-01-01T09:00:00.000Z'} | ${'2020-01-02T09:00:00.000Z'} | ${'Wed, 01 Jan - Thu, 02 Jan'}
  `(
    'should render time as $expected when date is $date',
    ({ startDate, endDate, expected }) => {
      const actual = formatUpcomingDates({ startDate, endDate })
      expect(actual).toEqual(expected)
    }
  )
})
