import { SVGProps } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'
import { NAMES } from './icons'
import { ROTATIONS } from './Icon.utils'

export type IconName = typeof NAMES[number]
export type IconRotation = typeof ROTATIONS[number]

export interface IconProps extends LayoutProps, SpaceProps {
  name: IconName
  variant: 'indigo' | 'white'
  /**
   * right: 90 degrees clockwise (to the right)
   *
   * flip: 180 degrees (flipped horizontally)
   *
   * left: 90 degrees counter-clockwise (to the left)
   */
  rotate?: typeof ROTATIONS[number]
}

export interface InternalIconProps extends SVGProps<SVGSVGElement> {
  colors: {
    primary: string
    secondary: string
  }
}
