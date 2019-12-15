import { css } from 'styled-components'
import theme from './theme'

export const media = {
  // Min width media queries
  mobile: (...args) => css`
    @media (min-width: ${theme.breakpoints[0]}) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${theme.breakpoints[1]}) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${theme.breakpoints[2]}) {
      ${css(...args)};
    }
  `,

  desktopHD: (...args) => css`
    @media (min-width: ${theme.breakpoints[3]}) {
      ${css(...args)};
    }
  `,
  // Custom breakpoint for navigation
  nav: (...args) => css`
    @media (min-width: ${theme.navBreakpoint}) {
      ${css(...args)};
    }
  `,

  // Max width media queries
  mobileMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[0] - 1}) {
      ${css(...args)};
    }
  `,
  tabletMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[1] - 1}) {
      ${css(...args)};
    }
  `,
  desktopMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[2] - 1}) {
      ${css(...args)};
    }
  `,

  desktopHDMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[3] - 1}) {
      ${css(...args)};
    }
  `,
  // Custom breakpoint for navigation
  navMax: (...args) => css`
    @media (max-width: ${theme.navBreakpoint - 1}) {
      ${css(...args)};
    }
  `,

  // Custom breakpoint for navigation
  ie11: (...args) => css`
    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      ${css(...args)};
    }
  `,
}
