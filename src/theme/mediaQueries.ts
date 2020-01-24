import { lg, md, sm, xl } from './breakpoints'

export const mediaQueries = {
  /**
   * Min with media queries
   */
  sm: `@media screen and (min-width: ${sm}px)`,
  md: `@media screen and (min-width: ${md}px)`,
  lg: `@media screen and (min-width: ${lg}px)`,
  xl: `@media screen and (min-width: ${xl}px)`,
  /**
   * Max-width media queries
   */
  smMax: `@media screen and (max-width: ${sm - 1}px)`,
  mdMax: `@media screen and (max-width: ${md - 1}px)`,
  lgMax: `@media screen and (max-width: ${lg - 1}px)`,
  xlMax: `@media screen and (max-width: ${xl - 1}px)`,
  /**
   * Microsoft Edge specific media query
   */
  edge: `@supports (-ms-ime-align:auto)`,
  /**
   * IE10 - IE11 specific media query
   */
  ie: `@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)`,
  /**
   * Accessibility media query for users that *have not* specified reduced motion
   */
  motion: `@media (prefers-reduced-motion: no-preference)`,
  /**
   * Accessibility media query for users that *have* specified reduced motion
   * Put styles to disable motion here (e.g. `animation: none;`)
   */
  reducedMotion: `@media (prefers-reduced-motion: reduce)`,
  /**
   * Media queries for printing
   */
  print: `@media print`,
  /**
   * Media query for 2x retina screen
   */
  retina2x: `@media (min-resolution: 2dppx)`,
  /**
   * Media query for 3x retina screen
   */
  retina3x: `@media (min-resolution: 3dppx)`,
}
