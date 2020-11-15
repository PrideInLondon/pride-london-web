import { SpaceProps } from 'styled-system'
import { RipTransform } from './ripVariants/RipVariant.types'

export type RipVariant = 1 | 2 | 3 | 4 | 5 | number

export interface Rip extends SpaceProps {
  variant: RipVariant
  color: string
}

export interface RipProps extends Rip {
  transform: RipTransform
}
