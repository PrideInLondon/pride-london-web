import React from 'react'
import styled from 'styled-components'
import { compose, space, layout } from 'styled-system'
import { useSpaceLayoutProps } from '../../hooks/useSpaceLayoutProps'
import { IconProps } from './Icon.types'
import {
  calculateComponent,
  calculateColors,
  calculateRotationDegrees,
} from './Icon.utils'

const DEFAULT_SIZE = '1em'

export const Icon = styled(({ name, variant, rotate, ...props }: IconProps) => {
  const Component = calculateComponent(name)
  const spaceLayoutProps = useSpaceLayoutProps(props)
  return (
    <Component
      focusable={false}
      aria-hidden
      role="img"
      colors={calculateColors(variant)}
      {...spaceLayoutProps[1]}
    />
  )
})`
  line-height: inherit;
  flex-shrink: 0;
  ${({ rotate }) => calculateRotationDegrees(rotate || 'none')}
  ${compose(space, layout)}
`

Icon.defaultProps = {
  rotate: 'none',
  width: DEFAULT_SIZE,
  height: DEFAULT_SIZE,
  verticalAlign: 'middle',
}
