import {
  formatTime,
  filterPastEvents,
  getDuration,
  sanitizeDates,
  generateEventSlug,
  extractEventIdFromSlug,
  sortEventsByStartTime,
  calculateEndTime,
  isVirtualEvent,
} from './helpers'

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
      .map((_, index) => ({ node: { startTime: new Date(index) } }))
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

describe('calculateEndTime', () => {
  it('should calculate the end time of a non-recurring event', () => {
    const actual = calculateEndTime({ endTime: '2020-03-04T00:00:00.000Z' })
    expect(actual).toEqual('2020-03-04T00:00:00.000Z')
  })

  it('should calculate the end time of a recurring event', () => {
    const actual = calculateEndTime({
      startTime: '2020-03-04T00:00:00.000Z',
      endTime: '2020-03-04T03:45:00.000Z', // duration should be 3h 45m
      recurrenceDates: ['06/03/2020', '08/03/2020', '10/03/2020'],
    })
    expect(actual).toEqual('2020-03-10T03:45:00.000Z')
  })
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
