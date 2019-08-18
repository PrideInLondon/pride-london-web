import { screenSizes, breakpoints } from './theme'

it.each`
  screen         | breakpointIndex
  ${'mobile'}    | ${0}
  ${'tablet'}    | ${1}
  ${'desktop'}   | ${2}
  ${'desktopHD'} | ${3}
`('successfully assigns $screen screen size', ({ screen, breakpointIndex }) => {
  expect(screenSizes[screen]).toBe(breakpoints[breakpointIndex])
})
