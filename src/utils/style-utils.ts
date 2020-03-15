export function checkBreakpoint(breakpoint: number): boolean {
  if (typeof window !== `undefined`) {
    return window.matchMedia(`(min-width: ${breakpoint}px)`).matches
  }
  return false
}

export const noScroll = {
  on() {
    document.querySelector('html')!.classList.add('no-scroll')
  },
  off() {
    document.querySelector('html')!.classList.remove('no-scroll')
  },
  toggle() {
    document.querySelector('html')!.classList.toggle('no-scroll')
  },
}
