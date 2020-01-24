import { css } from 'styled-components'
import { sm, md, lg, xl } from './breakpoints'
import theme from './theme'

export const media = {
  // Min width media queries
  mobile: (...args) => css`
    @media (min-width: ${sm}px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media (min-width: ${md}px) {
      ${css(...args)};
    }
  `,
  desktop: (...args) => css`
    @media (min-width: ${lg}px) {
      ${css(...args)};
    }
  `,

  desktopHD: (...args) => css`
    @media (min-width: ${xl}px) {
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
    @media (max-width: ${sm - 1}px) {
      ${css(...args)};
    }
  `,
  tabletMax: (...args) => css`
    @media (max-width: ${md - 1}px) {
      ${css(...args)};
    }
  `,
  desktopMax: (...args) => css`
    @media (max-width: ${lg - 1}px) {
      ${css(...args)};
    }
  `,

  desktopHDMax: (...args) => css`
    @media (max-width: ${xl - 1}px) {
      ${css(...args)};
    }
  `,
  // Custom breakpoint for navigation
  navMax: (...args) => css`
    @media (max-width: ${theme.navBreakpoint - 1}px) {
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
