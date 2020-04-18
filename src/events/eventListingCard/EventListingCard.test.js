import { formatLocation } from './EventListingCard'

describe('formatLocation', () => {
  it.each`
    platform                    | locationName | addressLine1 | expected
    ${'Zoom'}                   | ${null}      | ${null}      | ${'Zoom'}
    ${'In a physical location'} | ${'foo'}     | ${'bar'}     | ${'foo, bar'}
    ${'In a physical location'} | ${'foo'}     | ${null}      | ${'foo'}
  `(
    'should format location as $expected when given platform $platform, locationName $locationName, and addressLine1 $addressLine1',
    ({ platform, locationName, addressLine1, expected }) => {
      const actual = formatLocation({ platform, locationName, addressLine1 })
      expect(actual).toEqual(expected)
    }
  )
})
