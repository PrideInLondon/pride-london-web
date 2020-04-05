import { generateDisplayDate } from './EventCard'

describe('generateDisplayDate', () => {
  let firstOfJanuary

  beforeAll(() => {
    // set up to be 1st of January 2019 @ 09:00 UTC
    firstOfJanuary = new Date()
    firstOfJanuary.setFullYear(2019, 0, 1)
    firstOfJanuary.setHours(9, 0, 0)
  })

  it('should display the date as today when event occurs today', () => {
    const start = new Date(firstOfJanuary)
    start.setHours(19, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setHours(22, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJanuary })

    expect(actual).toEqual('Today\u00A0\u00A0•\u00A0\u00A019:00 - 22:00')
  })

  it('should display the date as tomorrow when event occurs tomorrow', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    end.setHours(20, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJanuary })

    expect(actual).toEqual('Tomorrow\u00A0\u00A0•\u00A0\u00A018:00 - 20:00')
  })

  it('should display the day and date it occurs when event occurs 2 or more days from now', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    end.setHours(21, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJanuary })

    expect(actual).toEqual('Fri, 01 Feb\u00A0\u00A0•\u00A0\u00A019:30 - 21:00')
  })

  it('should display a range of dates if end time is a different day from the start time', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJanuary)
    lastOccurrence.setMonth(firstOfJanuary.getMonth() + 1)
    lastOccurrence.setDate(firstOfJanuary.getDate() + 2) // set to February 03

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Fri, 01 Feb - Sun, 03 Feb\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })

  it('should display a range of dates starting at today if end time is a different day from the start time and event series has already started', () => {
    const start = new Date(firstOfJanuary)
    start.setMonth(firstOfJanuary.getMonth() - 1) // set to December 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setMonth(firstOfJanuary.getMonth() - 1) // set to December 01
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJanuary)
    lastOccurrence.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Today - Fri, 01 Feb\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })

  it('should display a range of dates starting at today if end time is a different day from the start time and event series starts today', () => {
    const start = new Date(firstOfJanuary) // set to January 01
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary) // set to January 01
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJanuary)
    lastOccurrence.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Today - Fri, 01 Feb\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })

  it('should display a range of dates starting at today if end time is a different day from the start time and event series starts tomorrow', () => {
    const start = new Date(firstOfJanuary)
    start.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    start.setHours(19, 30, 0)

    const end = new Date(firstOfJanuary)
    end.setDate(firstOfJanuary.getDate() + 1) // set to January 02
    end.setHours(21, 0, 0)

    const lastOccurrence = new Date(firstOfJanuary)
    lastOccurrence.setMonth(firstOfJanuary.getMonth() + 1) // set to February 01

    const actual = generateDisplayDate({
      start,
      end,
      lastOccurrence,
      now: firstOfJanuary,
    })

    expect(actual).toEqual(
      'Tomorrow - Fri, 01 Feb\u00A0\u00A0•\u00A0\u00A019:30 - 21:00'
    )
  })
})
