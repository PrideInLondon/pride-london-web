import { calculateRotationDegrees } from './Icon.utils'

describe('calculateRotationDegrees', () => {
  it.each`
    rotation   | expected
    ${'none'}  | ${0}
    ${'right'} | ${90}
    ${'flip'}  | ${180}
    ${'left'}  | ${270}
  `(
    'should calculate rotate angle for rotation $rotation',
    ({ rotation, expected }) => {
      const actual = calculateRotationDegrees(rotation)
      expect(actual).toEqual(expected)
    }
  )
})
