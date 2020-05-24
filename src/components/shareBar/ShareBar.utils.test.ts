import { generatePlatformName } from './ShareBar.utils'

describe('generatePlatformName', () => {
  it.each`
    name           | expected
    ${'email'}     | ${'Email'}
    ${'twitter'}   | ${'Twitter'}
    ${'facebook'}  | ${'Facebook'}
    ${'messenger'} | ${'Messenger'}
    ${'linked-in'} | ${'LinkedIn'}
  `(
    'should generate platform name for platform $platform',
    ({ name, expected }) => {
      const actual = generatePlatformName(name)
      expect(actual).toEqual(expected)
    }
  )
})
