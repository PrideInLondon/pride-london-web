import { formatDayRange, formatAddress } from './EventInfoCard'

describe('formatDayRange', () => {
  it.each`
    startTime                     | endTime                       | expected
    ${'2020-03-04T00:00:00.000Z'} | ${'2020-03-12T00:00:00.000Z'} | ${'Wednesday 4 March 2020 to Thursday 12 March 2020'}
    ${'2020-03-04T00:00:00.000Z'} | ${'2020-03-04T01:00:00.000Z'} | ${'Wednesday 4 March 2020'}
  `(
    'should format day as $expected when given start time $startTime and end time $endTime',
    ({ startTime, endTime, expected }) => {
      const actual = formatDayRange({ startTime, endTime })
      expect(actual).toEqual(expected)
    }
  )
})

describe('formatAddress', () => {
  it.each`
    addressLine1 | addressLine2 | city    | postcode | expected
    ${'a'}       | ${'b'}       | ${'c'}  | ${'d'}   | ${'a, b, c d'}
    ${'a'}       | ${'b'}       | ${'c'}  | ${null}  | ${'a, b, c'}
    ${'a'}       | ${'b'}       | ${null} | ${null}  | ${'a, b'}
  `(
    'should format address as $expected when given address lines $addressLine1, $addressLine2, city $city, and postcode $postcode',
    ({ addressLine1, addressLine2, city, postcode, expected }) => {
      const actual = formatAddress(addressLine1, addressLine2, city, postcode)
      expect(actual).toEqual(expected)
    }
  )
})
