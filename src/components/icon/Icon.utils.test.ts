import { calculateRotationDegrees } from './Icon.utils'

describe('calculateRotationDegrees', () => {
  it.each`
    direction    | expected
    ${undefined} | ${0}
    ${'up'}      | ${0}
    ${'right'}   | ${90}
    ${'down'}    | ${180}
    ${'left'}    | ${270}
  `(
    'should calculate rotate angle for direction $direction',
    ({ direction, expected }) => {
      const actual = calculateRotationDegrees(direction)
      expect(actual).toEqual(expected)
    }
  )
})
