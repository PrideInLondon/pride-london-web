import React from 'react'
import { useSpaceLayoutProps } from '../../hooks/useSpaceLayoutProps'
import { IconProps } from './Icon.types'
import { calculateComponent, calculateColors } from './Icon.utils'

const DEFAULT_SIZE = '1em'

const DEFAULT_STYLES = {
  lineHeight: 'inherit',
}

export const Icon = ({
  name,
  variant,
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  verticalAlign = 'middle',
  margin = '0.25em',
  ...props
}: IconProps) => {
  const Component = calculateComponent(name)
  const [spaceLayoutProps] = useSpaceLayoutProps({
    width,
    height,
    verticalAlign,
    margin,
    ...props,
  })
  return (
    <Component
      {...{
        colors: calculateColors(variant),
        style: { ...DEFAULT_STYLES, ...spaceLayoutProps },
      }}
    />
  )
}
