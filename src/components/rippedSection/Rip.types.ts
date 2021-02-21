import { SpaceProps } from 'styled-system'
import { RipTransform } from './ripVariants/RipVariant.types'

export const VARIANTS = [1, 2, 3, 4, 5] as const

export type RipVariant = typeof VARIANTS[number]

export interface Rip extends SpaceProps {
  variant?: RipVariant
  color: string
}

export interface RipProps extends Rip {
  transform: RipTransform
}
