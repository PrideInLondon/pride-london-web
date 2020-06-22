import { SVGProps } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

export const ROTATIONS = ['none', 'right', 'flip', 'left'] as const

export interface IconProps extends LayoutProps, SpaceProps {
  name: string
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
