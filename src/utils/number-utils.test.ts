import { getRandomInt } from './number-utils'

describe('getRandomInt', () => {
  it('should generate a random int between min and max', () => {
    const min = 1,
      max = 10,
      reps = 50

    // generate X number of times to check pseudorandom
    for (let i = 0; i < reps; i++) {
      const actual = getRandomInt(min, max)
      expect(actual).toBeGreaterThanOrEqual(min)
      expect(actual).toBeLessThanOrEqual(max)
    }
  })
})
