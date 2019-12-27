import { breakpoints } from './breakpoints'
import { mediaQueries } from './mediaQueries'
import { colors } from './colors'

const theme = {
  colors,
  fonts: {
    title: 'Poppins, sans-serif',
    body: 'Roboto, sans-serif',
  },
  space: [0, 5, 10, 15, 20],
  breakpoints,
  mediaQueries,
  navBreakpoint: 1360,
}

export default theme
