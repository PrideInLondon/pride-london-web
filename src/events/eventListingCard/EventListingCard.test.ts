import { changeTimeZone } from '../helpers'
import {
  generateDisplayDate,
  formatLocation,
  checkTimesAreSame,
} from './EventListingCard.utils'
import { EventDateOccurrence } from './EventListingCard.types'

describe('formatLocation', () => {
  it.each`
    platform                    | locationName | addressLine1 | expected
    ${'Zoom'}                   | ${null}      | ${null}      | ${'Zoom'}
    ${'In a physical location'} | ${'foo'}     | ${'bar'}     | ${'foo, bar'}
    ${'In a physical location'} | ${'foo'}     | ${null}      | ${'foo'}
  `(
    'should format location as $expected when given platform $platform, locationName $locationName, and addressLine1 $addressLine1',
    ({ platform, locationName, addressLine1, expected }) => {
      const actual = formatLocation({ platform, locationName, addressLine1 })
      expect(actual).toEqual(expected)
    }
  )
})

describe('checkTimesAreSame', () => {
  it('should return true if all event times are the same', () => {
    const start = new Date()
    start.setHours(19, 30, 0)

    const end = new Date()
    end.setHours(22, 15, 0)

    const start2 = new Date()
    start2.setHours(19, 30, 0)

    const end2 = new Date()
    end2.setHours(22, 15, 0)

    const dates: EventDateOccurrence[] = [
      {
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        id: 'test',
      },
      {
        startDate: start2.toISOString(),
        endDate: end2.toISOString(),
        id: 'test2',
      },
    ]
    expect(checkTimesAreSame(dates)).toBeTruthy()
  })

  it('should return false if all event times are not the same', () => {
    const start = new Date()
    start.setHours(19, 30, 0)

    const end = new Date()
    end.setHours(22, 15, 0)

    const start2 = new Date()
    start2.setHours(19, 45, 0)

    const end2 = new Date()
    end2.setHours(23, 30, 0)

    const dates: EventDateOccurrence[] = [
      {
        startDate: start.toISOString(),
        endDate: end.toISOString(),
        id: 'test',
      },
      {
        startDate: start2.toISOString(),
        endDate: end2.toISOString(),
        id: 'test2',
      },
    ]
    expect(checkTimesAreSame(dates)).toBeFalsy()
  })
})

describe('generateDisplayDate', () => {
  let firstOfJanuary: Date

  beforeAll(() => {
    // set up to be 1st of January 2019 @ 09:00 UTC
    firstOfJanuary = new Date('2019-01-01T09:00:00')
  })

  it('should display the date as today when event occurs today', () => {
    const start = new Date(firstOfJanuary)
    start.setHours(19, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setHours(22, 0, 0)

    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual('Today\u00A0\u00A0•\u00A0\u00A019:00 - 22:00')
  })

  it('should display the date as tomorrow when event occurs tomorrow', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    end.setHours(20, 0, 0)

    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual('Tomorrow\u00A0\u00A0•\u00A0\u00A018:00 - 20:00')
  })

  it('should display the day and date it occurs when event occurs 2 or more days from now', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    end.setHours(21, 0, 0)

    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual('Fri, 01 Feb\u00A0\u00A0•\u00A0\u00A019:30 - 21:00')
  })

  it('should display the day and date it occurs when event occurs 2 or more days from now and during BST', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() + 5) // set to June 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() + 5) // set to June 01
    end.setHours(21, 0, 0)

    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual('Sat, 01 Jun\u00A0\u00A0•\u00A0\u00A020:30 - 22:00')
  })

  it('should display a range of dates if end time is a different day from the start time', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    end.setDate(firstOfJanuary.getDate() + 2) // set to February 03
    end.setHours(21, 0, 0)

    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Fri, 01 Feb - Sun, 03 Feb\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })

  it('should display a range of dates if there are more than one event occurrences', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    end.setHours(20, 0, 0)

    const start2 = new Date(firstOfJanuary)
    start2.setDate(firstOfJanuary.getDate() + 3) // set to January 04
    start2.setHours(18, 0, 0)

    const end2 = new Date(firstOfJanuary)
    end2.setDate(firstOfJanuary.getDate() + 3) // set to January 04
    end2.setHours(20, 0, 0)

    // Note: dates from contentful should already be pre-sorted ascending
    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test1',
        },
        {
          startDate: changeTimeZone(start2).toISOString(),
          endDate: changeTimeZone(end2).toISOString(),
          id: 'test2',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Thu, 03 Jan - Fri, 04 Jan\u00A0\u00A0•\u00A0\u00A018:00 - 20:00'
    )
  })

  it('should show the next upcoming date if there are multiple dates and some have already passed', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() - 1) // set to Dec 31
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() - 1) // set to Dec 31
    end.setHours(20, 0, 0)

    const start2 = new Date(firstOfJanuary)
    start2.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    start2.setHours(18, 0, 0)

    const end2 = new Date(firstOfJanuary)
    end2.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    end2.setHours(20, 0, 0)

    const start3 = new Date(firstOfJanuary)
    start3.setDate(firstOfJanuary.getDate() + 3) // set to January 04
    start3.setHours(18, 0, 0)

    const end3 = new Date(firstOfJanuary)
    end3.setDate(firstOfJanuary.getDate() + 3) // set to January 04
    end3.setHours(20, 0, 0)

    // Note: dates from contentful should already be pre-sorted ascending
    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test1',
        },
        {
          startDate: changeTimeZone(start2).toISOString(),
          endDate: changeTimeZone(end2).toISOString(),
          id: 'test2',
        },
        {
          startDate: changeTimeZone(start3).toISOString(),
          endDate: changeTimeZone(end3).toISOString(),
          id: 'test3',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Thu, 03 Jan - Fri, 04 Jan\u00A0\u00A0•\u00A0\u00A018:00 - 20:00'
    )
  })

  it('should show [Today - {endDate}] if one of the events in the series occurs today', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() - 1) // set to Dec 31
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() - 1) // set to Dec 31
    end.setHours(20, 0, 0)

    const start2 = new Date(firstOfJanuary)
    start2.setHours(18, 0, 0)

    const end2 = new Date(firstOfJanuary)
    end2.setHours(20, 0, 0)

    const start3 = new Date(firstOfJanuary)
    start3.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    start3.setHours(18, 0, 0)

    const end3 = new Date(firstOfJanuary)
    end3.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    end3.setHours(20, 0, 0)

    // Note: dates from contentful should already be pre-sorted ascending
    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test1',
        },
        {
          startDate: changeTimeZone(start2).toISOString(),
          endDate: changeTimeZone(end2).toISOString(),
          id: 'test2',
        },
        {
          startDate: changeTimeZone(start3).toISOString(),
          endDate: changeTimeZone(end3).toISOString(),
          id: 'test3',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Today - Wed, 02 Jan\u00A0\u00A0•\u00A0\u00A018:00 - 20:00'
    )
  })

  it('should show [Tomorrow - {endDate}] if the next available event in the series occurs tomorrow', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() - 1) // set to Dec 31
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() - 1) // set to Dec 31
    end.setHours(20, 0, 0)

    const start2 = new Date(firstOfJanuary)
    start2.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    start2.setHours(18, 0, 0)

    const end2 = new Date(firstOfJanuary)
    end2.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    end2.setHours(20, 0, 0)

    const start3 = new Date(firstOfJanuary)
    start3.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    start3.setHours(18, 0, 0)

    const end3 = new Date(firstOfJanuary)
    end3.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    end3.setHours(20, 0, 0)

    // Note: dates from contentful should already be pre-sorted ascending
    const actual = generateDisplayDate({
      dates: [
        {
          startDate: changeTimeZone(start).toISOString(),
          endDate: changeTimeZone(end).toISOString(),
          id: 'test1',
        },
        {
          startDate: changeTimeZone(start2).toISOString(),
          endDate: changeTimeZone(end2).toISOString(),
          id: 'test2',
        },
        {
          startDate: changeTimeZone(start3).toISOString(),
          endDate: changeTimeZone(end3).toISOString(),
          id: 'test3',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Tomorrow - Thu, 03 Jan\u00A0\u00A0•\u00A0\u00A018:00 - 20:00'
    )
  })

  it('should say to check details if the event times are not the same for each occurrence', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() + 2) // set to January 03
    end.setHours(20, 0, 0)

    const start2 = new Date(firstOfJanuary)
    start2.setDate(firstOfJanuary.getDate() + 3) // set to January 04
    start2.setHours(19, 0, 0)

    const end2 = new Date(firstOfJanuary)
    end2.setDate(firstOfJanuary.getDate() + 3) // set to January 04
    end2.setHours(21, 0, 0)

    // Note: dates from contentful should already be pre-sorted ascending
    const actual = generateDisplayDate({
      dates: [
        {
          startDate: start.toISOString(),
          endDate: end.toISOString(),
          id: 'test1',
        },
        {
          startDate: start2.toISOString(),
          endDate: end2.toISOString(),
          id: 'test2',
        },
      ],
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Thu, 03 Jan - Fri, 04 Jan\u00A0\u00A0•\u00A0\u00A0See details for times'
    )
  })

  it('should display the date if on demand event lasts only one day', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    end.setHours(21, 0, 0)

    const actual = generateDisplayDate({
      dates: [
        {
          id: 'single-date',
          startDate: start.toISOString(),
          endDate: end.toISOString(),
        },
      ],
      onDemand: true,
      now: firstOfJanuary,
    })

    expect(actual).toEqual('Fri, 01 Feb\u00A0\u00A0•\u00A0\u00A0On demand')
  })

  it('should display the day range if on demand event spans multiple days', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() + 3) // set to April 01
    end.setHours(21, 0, 0)

    const actual = generateDisplayDate({
      dates: [
        {
          id: 'multi-date',
          startDate: start.toISOString(),
          endDate: end.toISOString(),
        },
      ],
      onDemand: true,
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Fri, 01 Feb - Mon, 01 Apr\u00A0\u00A0•\u00A0\u00A0On demand'
    )
  })
})
