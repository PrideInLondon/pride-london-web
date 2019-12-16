const { generateDisplayDate } = require('./eventCard')

describe('generateDisplayDate', () => {
  let firstOfJune

  beforeAll(() => {
    // set up to be the next occurring 1st of June 09:00
    firstOfJune = new Date()
    firstOfJune.setFullYear(
      firstOfJune.getFullYear() + (firstOfJune.getMonth() >= 5 ? 1 : 0),
      5,
      1
    )
    firstOfJune.setHours(9, 0, 0)
  })

  it('should display the date as today when event occurs today', () => {
    const start = new Date(firstOfJune)
    start.setHours(19, 0, 0)

    const end = new Date(firstOfJune)
    end.setHours(22, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJune })

    expect(actual).toEqual('Today • 19:00 - 22:00')
  })

  it('should display the date as tomorrow when event occurs tomorrow', () => {
    const start = new Date(firstOfJune)
    start.setDate(firstOfJune.getDate() + 1)
    start.setHours(18, 0, 0)

    const end = new Date(firstOfJune)
    end.setDate(firstOfJune.getDate() + 1)
    end.setHours(20, 0, 0)

    const actual = generateDisplayDate({ start, end, now: firstOfJune })

    expect(actual).toEqual('Tomorrow • 18:00 - 20:00')
  })

  it('when for a single event, should display the date it occurs', () => {
    const start = new Date(firstOfJune)
    start.setMonth(firstOfJune.getMonth() + 1) // set to July

    const actual = generateDisplayDate({ start, now: firstOfJune })

    expect(actual).toEqual('Jul 01')
  })

  it('when for a recurring event, should display the date range it occurs', () => {
    // creates occurrences for 1st to 3rd July
    const occurrences = [0, 1, 2].map(index => {
      const occurrence = new Date(firstOfJune)
      occurrence.setMonth(
        firstOfJune.getMonth() + 1,
        firstOfJune.getDate() + index
      )
      return occurrence
    })

    const actual = generateDisplayDate({
      start: occurrences[0],
      occurrences,
      now: firstOfJune,
    })

    expect(actual).toEqual('Jul 01 - Jul 03')
  })

  it('when for a recurring event that has already begun, should display an "until end date"', () => {
    // creates occurrences for 31st May to 2nd June
    const occurrences = [-1, 0, 1].map(index => {
      const occurrence = new Date(firstOfJune)
      occurrence.setDate(firstOfJune.getDate() + index)
      return occurrence
    })

    const actual = generateDisplayDate({
      start: occurrences[1],
      occurrences,
      now: firstOfJune,
    })

    expect(actual).toEqual('Until Jun 02')
  })
})
