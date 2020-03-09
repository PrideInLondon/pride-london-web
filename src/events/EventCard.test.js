import { generateDisplayDate } from './EventCard'

describe('generateDisplayDate', () => {
  let firstOfJune

  beforeAll(() => {
    // set up to be 1st of June 2019 @ 09:00
    firstOfJune = new Date()
    firstOfJune.setFullYear(2019, 5, 1)
    firstOfJune.setHours(9, 0, 0)
  })

  it('should display the date as today when event occurs today', () => {
    const start = new Date(firstOfJune)
    start.setHours(19, 0, 0)

    const end = new Date(firstOfJune)
    end.setHours(22, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJune })

    expect(actual).toEqual('Today\u00A0\u00A0•\u00A0\u00A019:00 - 22:00')
  })

  it('should display the date as tomorrow when event occurs tomorrow', () => {
    const start = new Date(firstOfJune)
    start.setDate(firstOfJune.getDate() + 1)
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJune)
    end.setDate(firstOfJune.getDate() + 1)
    end.setHours(20, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJune })

    expect(actual).toEqual('Tomorrow\u00A0\u00A0•\u00A0\u00A018:00 - 20:00')
  })

  it('should display the day and date it occurs when event occurs 2 or more days from now', () => {
    const start = new Date(firstOfJune)
    start.setMonth(firstOfJune.getMonth() + 1) // set to July 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJune)
    end.setMonth(firstOfJune.getMonth() + 1) // set to July 01
    end.setHours(21, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJune })

    expect(actual).toEqual('Mon, 01 Jul\u00A0\u00A0•\u00A0\u00A019:30 - 21:00')
  })

  it('should display a range of dates if end time is a different day from the start time', () => {
    const start = new Date(firstOfJune)
    start.setMonth(firstOfJune.getMonth() + 1) // set to July 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJune)
    end.setMonth(firstOfJune.getMonth() + 1) // set to July 01
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJune)
    lastOccurrence.setMonth(firstOfJune.getMonth() + 1)
    lastOccurrence.setDate(firstOfJune.getDate() + 2) // set to July 03

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJune,
    })

    expect(actual).toEqual(
      'Mon, 01 Jul - Wed, 03 Jul\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })

  it('should display a range of dates starting at today if end time is a different day from the start time and event series has already started', () => {
    const start = new Date(firstOfJune)
    start.setMonth(firstOfJune.getMonth() - 1) // set to May 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJune)
    end.setMonth(firstOfJune.getMonth() - 1) // set to May 01
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJune)
    lastOccurrence.setMonth(firstOfJune.getMonth() + 1) // set to July 01

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJune,
    })

    expect(actual).toEqual(
      'Today - Mon, 01 Jul\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })

  it('should display a range of dates starting at today if end time is a different day from the start time and event series starts today', () => {
    const start = new Date(firstOfJune) // set to June 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJune) // set to June 01
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJune)
    lastOccurrence.setMonth(firstOfJune.getMonth() + 1) // set to July 01

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJune,
    })

    expect(actual).toEqual(
      'Today - Mon, 01 Jul\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })

  it('should display a range of dates starting at today if end time is a different day from the start time and event series starts tomorrow', () => {
    const start = new Date(firstOfJune)
    start.setDate(firstOfJune.getDate() + 1) // set to June 02
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJune)
    end.setDate(firstOfJune.getDate() + 1) // set to June 02
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJune)
    lastOccurrence.setMonth(firstOfJune.getMonth() + 1) // set to July 01

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJune,
    })

    expect(actual).toEqual(
      'Tomorrow - Mon, 01 Jul\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })
})
