import { GatsbyImage } from "gatsby-plugin-image";
import { sm, md } from '../theme/breakpoints'

export const checkBreakpoint = (breakpoint: number): boolean =>
  typeof window !== `undefined`
    ? window.matchMedia(`(min-width: ${breakpoint}px)`).matches
    : false

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

export const getImageForBreakpoint = <T extends FluidObject | GatsbyImage>({
  mobile,
  tablet,
  desktop,
}: {
  mobile: T
  tablet: T
  desktop: T
}): T =>
  !checkBreakpoint(sm) ? mobile : !checkBreakpoint(md) ? tablet : desktop
