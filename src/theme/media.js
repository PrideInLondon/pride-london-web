import { css } from 'styled-components'
import theme from './theme'

export const media = {
  mobile: (...args) => css`
    @media (min-width: ${theme.breakpoints[0]}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${theme.breakpoints[1]}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${theme.breakpoints[2]}px) {
      ${css(...args)};
    }
  `,

  desktopHD: (...args) => css`
    @media (min-width: ${theme.breakpoints[3]}px) {
      ${css(...args)};
    }
  `,
  // Custom breakpoint for navigation
  nav: (...args) => css`
    @media (min-width: 1275px) {
      ${css(...args)};
    }
  `,
}
