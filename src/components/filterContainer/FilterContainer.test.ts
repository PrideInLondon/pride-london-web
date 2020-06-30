import { calculateIsSelected } from './FilterContainer'

describe('calculateIsSelected', () => {
  it.each`
    role          | selected                 | expected
    ${'checkbox'} | ${['foo', 'bar', 'baz']} | ${true}
    ${'checkbox'} | ${['foo', 'baz']}        | ${false}
    ${'radio'}    | ${'bar'}                 | ${true}
    ${'radio'}    | ${'foo'}                 | ${false}
  `(
    'should return $expected when given role $role and selected $selected',
    ({ role, selected, expected }) => {
      const isSelected = calculateIsSelected(role, 'bar', selected)
      expect(isSelected).toEqual(expected)
    }
  )
})
