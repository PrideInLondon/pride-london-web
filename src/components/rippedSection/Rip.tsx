import React from 'react'
import { getRandomInt } from '../../utils/number-utils'
import {
  RipVariant1,
  RipVariant2,
  RipVariant3,
  RipVariant4,
  RipVariant5,
} from './ripVariants'
import { RipVariant, RipProps } from './Rip.types'

export const RIPS = [
  RipVariant1,
  RipVariant2,
  RipVariant3,
  RipVariant4,
  RipVariant5,
]

export const getVariant = (variant?: RipVariant) =>
  RIPS[(variant || getRandomInt(1, RIPS.length - 1)) - 1]

export const Rip: React.FC<RipProps> = ({ variant, transform, ...props }) => {
  const Variant = getVariant(variant)
  return <Variant variant={transform} aria-hidden="true" {...props} />
}
