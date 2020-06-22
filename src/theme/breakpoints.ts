export const sm = 375
export const md = 768
export const lg = 1024
export const xl = 1440
export const nav = 1360

export interface Breakpoints {
  sm: string
  md: string
  lg: string
  xl: string
  nav: string
}

export const breakpoints: string[] & Breakpoints = Object.assign(
  [`${sm}px`, `${md}px`, `${lg}px`, `${xl}px`],
  {
    default: '0px',
    sm: `${sm}px`,
    md: `${md}px`,
    lg: `${lg}px`,
    xl: `${xl}px`,
    nav: `${nav}px`,
  }
)
