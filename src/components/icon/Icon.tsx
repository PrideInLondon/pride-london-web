import React from 'react'
import { IconProps } from './Icon.types'
import { calculateComponent, calculateColors } from './Icon.utils'

export const Icon = ({ name, variant }: IconProps) => {
  const Component = calculateComponent(name)
  return <Component {...{ colors: calculateColors(variant) }} />
}
