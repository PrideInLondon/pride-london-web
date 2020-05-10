import React from 'react'
import { render } from '@testing-library/react'

import {
  formatDayRange,
  formatTimeRange,
  formatAddress,
  Location,
} from './EventInfoCard'

describe('formatDayRange', () => {
  it.each`
    startDate                     | endDate                       | expected
    ${'2020-03-04T00:00:00.000Z'} | ${'2020-03-12T00:00:00.000Z'} | ${'Wednesday 4 March 2020 to Thursday 12 March 2020'}
    ${'2020-03-04T00:00:00.000Z'} | ${'2020-03-04T01:00:00.000Z'} | ${'Wednesday 4 March 2020'}
  `(
    'should format day as $expected when given start time $startDate and end time $endDate',
    ({ startDate, endDate, expected }) => {
      const actual = formatDayRange({ startDate, endDate })
      expect(actual).toEqual(expected)
    }
  )
})

describe('formatTimeRange', () => {
  it('should format time range for event', () => {
    const startDate = '2020-03-04T09:00:00.000Z'
    const endDate = '2020-03-04T12:45:00.000Z'
    const actual = formatTimeRange({ startDate, endDate })
    expect(actual).toEqual('9am to 12:45pm')
  })
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

describe('Location', () => {
  it.each`
    platform                    | props                                                                 | expected
    ${'Facebook'}               | ${{}}                                                                 | ${'On Facebook'}
    ${'In a physical location'} | ${{ addressLine1: 'a', addressLine2: 'b', city: 'c', postcode: 'd' }} | ${'a, b, c d'}
  `(
    'should render Location info as $expected when given platform $platform',
    ({ platform, props, expected }) => {
      const { queryByText } = render(<Location {...{ platform, ...props }} />)
      expect(queryByText(expected)).toBeTruthy()
    }
  )
})
