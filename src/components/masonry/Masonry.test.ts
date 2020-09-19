import { sm, md, lg, xl } from '../../theme/breakpoints'
import { calculateColumns } from './Masonry'

describe('calculateColumns', () => {
  const BREAKPOINTS: { [key: string]: number } = {
    default: 1,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  }

  it.each`
    currentWidth | expected
    ${sm - 1}    | ${BREAKPOINTS.default}
    ${sm}        | ${BREAKPOINTS.sm}
    ${md - 1}    | ${BREAKPOINTS.sm}
    ${md}        | ${BREAKPOINTS.md}
    ${lg - 1}    | ${BREAKPOINTS.md}
    ${lg}        | ${BREAKPOINTS.lg}
    ${xl - 1}    | ${BREAKPOINTS.lg}
    ${xl}        | ${BREAKPOINTS.xl}
  `(
    'should calculate columns as $expected when given current width $currentWidth',
    ({ currentWidth, expected }) => {
      const actual = calculateColumns(currentWidth, BREAKPOINTS)
      expect(actual).toEqual(expected)
    }
  )
})
