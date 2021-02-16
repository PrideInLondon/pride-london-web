import React from 'react'
import {
  RipVariant1,
  RipVariant2,
  RipVariant3,
  RipVariant4,
  RipVariant5,
} from './ripVariants'
import { RipProps } from './Rip.types'

const RIPS = [RipVariant1, RipVariant2, RipVariant3, RipVariant4, RipVariant5]

export const Rip: React.FC<RipProps> = ({ variant, transform, ...props }) => {
  if (!variant) return null

  const RipVariant = RIPS[variant - 1]
  return <RipVariant variant={transform} aria-hidden="true" {...props} />
}
