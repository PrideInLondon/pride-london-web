import { v4 as uuid } from 'uuid'
import { calculateInitialSelected } from './CategoryFilter'

const CATEGORIES = Array.from(Array(6).keys()).map((_) => ({
  color: uuid(),
  name: uuid(),
}))

const ALL_CATEGORIES = [
  { color: uuid(), name: uuid(), isSelectAll: true },
  ...CATEGORIES,
]

describe('calculateInitialSelected', () => {
  it.each`
    variant       | hasSelectAll | expected
    ${'checkbox'} | ${true}      | ${[]}
    ${'checkbox'} | ${false}     | ${[CATEGORIES[0].name]}
    ${'radio'}    | ${true}      | ${''}
    ${'radio'}    | ${false}     | ${CATEGORIES[0].name}
  `(
    'should return $expected when given variant $variant and select all is $hasSelectAll',
    ({ variant, hasSelectAll, expected }) => {
      const actual = calculateInitialSelected(
        variant,
        hasSelectAll ? ALL_CATEGORIES : CATEGORIES
      )
      expect(actual).toEqual(expected)
    }
  )
})
