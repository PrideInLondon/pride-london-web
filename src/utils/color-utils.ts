import tinycolor from 'tinycolor2'
import { colors } from '../theme/colors'

export const getMostReadable = (
  baseColor: string,
  colorList = [colors.white, colors.black]
): string =>
  tinycolor
    .mostReadable(baseColor, colorList, {
      includeFallbackColors: true,
      level: 'AAA',
      size: 'small',
    })
    .toHexString()
