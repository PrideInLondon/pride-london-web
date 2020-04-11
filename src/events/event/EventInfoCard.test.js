import { formatDayRange } from './EventInfoCard'

describe('formatDayRange', () => {
  it('should render a range of dates if the event is recurring', () => {
    const startTime = '2020-03-04T00:00:00.000Z'
    const endTime = '2020-03-12T00:00:00.000Z'
    const expected = 'Wednesday 4 March 2020 to Thursday 12 March 2020'
    const actual = formatDayRange({ startTime, endTime })
    expect(actual).toEqual(expected)
  })

  it('should render a single date if the event is non-recurring', () => {
    const startTime = '2020-03-04T00:00:00.000Z'
    const endTime = '2020-03-04T01:00:00.000Z'
    const expected = 'Wednesday 4 March 2020'
    const actual = formatDayRange({ startTime, endTime })
    expect(actual).toEqual(expected)
  })
})
