function checkBreakpoint(breakpoint) {
  if (typeof window !== `undefined`) {
    return window.matchMedia(`(min-width: ${breakpoint}px)`).matches
  }
}

const noScroll = {
  on() {
    document.querySelector('html').classList.add('no-scroll')
  },
  off() {
    document.querySelector('html').classList.remove('no-scroll')
  },
  toggle() {
    document.querySelector('html').classList.toggle('no-scroll')
  },
}

export { noScroll, checkBreakpoint }
