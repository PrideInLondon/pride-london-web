export const none = 0
export const xxs = 2
export const xs = 4
export const sm = 8
export const md = 16
export const lg = 24
export const xl_mob = 40
export const xl = 56
export const xxl_mob = 64
export const xxl = 80

export function convertToRem(space: number, base: number = md) {
  return `${space / base}rem`
}

export const spacing = {
  none: convertToRem(none),
  xxs: convertToRem(xxs),
  xs: convertToRem(xs),
  sm: convertToRem(sm),
  md: convertToRem(md),
  lg: convertToRem(lg),
  xl: convertToRem(xl),
  xl_mob: convertToRem(xl_mob),
  xxl: convertToRem(xxl),
  xxl_mob: convertToRem(xxl_mob),
}

type Space = typeof spacing

export const space: string[] & Space = Object.assign(
  Object.values(spacing),
  spacing
)
