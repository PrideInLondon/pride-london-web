import { css } from 'styled-components'
import theme from './theme'

export const media = {
  // Min width media queries
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
    @media (min-width: ${theme.navBreakpoint}px) {
      ${css(...args)};
    }
  `,

  // Max width media queries
  mobileMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[0] - 1}px) {
      ${css(...args)};
    }
  `,
  tabletMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[1] - 1}px) {
      ${css(...args)};
    }
  `,
  desktopMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[2] - 1}px) {
      ${css(...args)};
    }
  `,

  desktopHDMax: (...args) => css`
    @media (max-width: ${theme.breakpoints[3] - 1}px) {
      ${css(...args)};
    }
  `,
  // Custom breakpoint for navigation
  navMax: (...args) => css`
    @media (max-width: ${theme.navBreakpoint - 1}px) {
      ${css(...args)};
    }
  `,
}
