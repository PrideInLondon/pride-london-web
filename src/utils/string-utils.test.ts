import { capitaliseFirst } from './string-utils'

describe('capitaliseFirst', () => {
  it.each`
    str      | expected
    ${'foo'} | ${'Foo'}
    ${'Bar'} | ${'Bar'}
    ${'BAZ'} | ${'BAZ'}
  `(
    'should capitalise only the first letter of string $str',
    ({ str, expected }) => {
      const actual = capitaliseFirst(str)
      expect(actual).toEqual(expected)
    }
  )
})
