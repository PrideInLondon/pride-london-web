import { generateSlug } from './page-utils'

describe('generateSlug', () => {
  it.each`
    str            | expected
    ${'foo'}       | ${'foo'}
    ${'foo-bar'}   | ${'foo-bar'}
    ${'foo - bar'} | ${'foo-bar'}
    ${'Foo: Bar'}  | ${'foo-bar'}
    ${'foo / bar'} | ${'foo-bar'}
    ${'"foo" bar'} | ${'foo-bar'}
    ${'foo? bar'}  | ${'foo-bar'}
  `(
    'should generate URL-friendly slug $expected for string $str',
    ({ str, expected }) => {
      const actual = generateSlug(str)
      expect(actual).toEqual(expected)
    }
  )
})
