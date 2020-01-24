const { generateDisplayDate } = require('./eventCard')

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
})
