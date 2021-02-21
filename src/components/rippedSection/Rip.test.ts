import { RIPS, getVariant } from './Rip'
import {
  RipVariant1,
  RipVariant2,
  RipVariant3,
  RipVariant4,
  RipVariant5,
} from './ripVariants'

describe('getVariant', () => {
  it.each`
    variant | expected
    ${1}    | ${RipVariant1}
    ${2}    | ${RipVariant2}
    ${3}    | ${RipVariant3}
    ${4}    | ${RipVariant4}
    ${5}    | ${RipVariant5}
  `(
    'should return correct component for variant $variant',
    ({ variant, expected }) => {
      const actual = getVariant(variant)
      expect(actual).toEqual(expected)
    }
  )

  it('should return a random variant when given no variant', () => {
    const actual = getVariant()
    expect(RIPS.includes(actual)).toBeTruthy()
  })
})
