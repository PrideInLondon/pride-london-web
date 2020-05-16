export const none = 0
export const xxs = 2
export const xs = 4
export const sm = 8
export const md = 16
export const lg = 24
export const xl = 56
export const xxl = 80

function convertToRem(space: number, base: number = md) {
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
  xxl: convertToRem(xxl),
}

type Space = typeof spacing

export const space: string[] & Space = Object.assign(
  [
    spacing.none,
    spacing.xxs,
    spacing.xs,
    spacing.sm,
    spacing.md,
    spacing.lg,
    spacing.xl,
    spacing.xxl,
  ],
  spacing
)
