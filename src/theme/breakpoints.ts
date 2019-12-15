export const sm = 375
export const md = 768
export const lg = 1024
export const xl = 1440

export interface Breakpoints {
  sm: number
  md: number
  lg: number
  xl: number
}

export const breakpoints: number[] & Breakpoints = Object.assign(
  [sm, md, lg, xl],
  {
    sm,
    md,
    lg,
    xl,
  }
)
