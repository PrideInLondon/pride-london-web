import React from 'react'
import { useSpaceLayoutProps } from '../../hooks/useSpaceLayoutProps'
import { IconProps } from './Icon.types'
import { calculateComponent, calculateColors } from './Icon.utils'

const DEFAULT_SIZE = 32

export const Icon = ({
  name,
  variant,
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  ...props
}: IconProps) => {
  const Component = calculateComponent(name)
  const [spaceLayoutProps] = useSpaceLayoutProps({ width, height, ...props })
  return (
    <Component {...{ colors: calculateColors(variant), ...spaceLayoutProps }} />
  )
}
