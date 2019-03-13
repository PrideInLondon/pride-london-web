export function checkBreakpoint(breakpoint) {
  return window.matchMedia(`(min-width: ${breakpoint}px)`).matches
}
