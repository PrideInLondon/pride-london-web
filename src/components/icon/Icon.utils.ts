import { colors } from '../../theme/colors'
import { IconName, IconRotation } from './Icon.types'
import { COMPONENTS } from './icons'

export const calculateComponent = (name: IconName) => COMPONENTS[name]

const COLORS: {
  [key: string]: {
    primary: string
    secondary: string
  }
} = {
  indigo: {
    primary: colors.indigo,
    secondary: colors.eucalyptusGreen,
  },
  white: {
    primary: colors.white,
    secondary: colors.eucalyptusGreen,
  },
}

export const calculateColors = (variant: string) => COLORS[variant]

export const ROTATIONS = ['none', 'right', 'flip', 'left'] as const

export const calculateRotationDegrees = (rotate: IconRotation) =>
  ROTATIONS.indexOf(rotate) * 90
