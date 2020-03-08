import {
  filterPastEvents,
  getDuration,
  sanitizeDates,
  generateEventSlug,
  extractEventIdFromSlug,
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
