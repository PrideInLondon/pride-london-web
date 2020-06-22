export const fonts = {
  title: 'Poppins, sans-serif',
  body: 'Roboto, sans-serif',
  cactus: 'Cactus, sans-serif',
}

function convertToRem(fontSize: number, base: number = 16): string {
  return `${fontSize / base}rem`
}

const h1 = 101
const h1_mobile = 61
const h2 = 76
const h2_mobile = 49
const h3 = 57
const h3_mobile = 39
const h4 = 43
const h4_mobile = 31
const h5 = 32
const h5_mobile = 25
const h6 = 24
const h6_mobile = 20
const body_lg = 22
const body_md = 18
const body_md_mobile = 16
const body_sm = 14
const body_sm_mobile = 12

export const fontSizes = {
  h1: convertToRem(h1),
  h1_mobile: convertToRem(h1_mobile),
  h2: convertToRem(h2),
  h2_mobile: convertToRem(h2_mobile),
  h3: convertToRem(h3),
  h3_mobile: convertToRem(h3_mobile),
  h4: convertToRem(h4),
  h4_mobile: convertToRem(h4_mobile),
  h5: convertToRem(h5),
  h5_mobile: convertToRem(h5_mobile),
  h6: convertToRem(h6),
  h6_mobile: convertToRem(h6_mobile),
  body_lg: convertToRem(body_lg),
  body_md: convertToRem(body_md),
  body_md_mobile: convertToRem(body_md_mobile),
  body_sm: convertToRem(body_sm),
  body_sm_mobile: convertToRem(body_sm_mobile),
}
