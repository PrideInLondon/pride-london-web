import { SVGProps } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

export const DIRECTIONS = ['up', 'right', 'down', 'left'] as const

export interface IconProps extends LayoutProps, SpaceProps {
  name: string
  variant: 'indigo' | 'white'
  direction?: typeof DIRECTIONS[number]
}

export interface InternalIconProps extends SVGProps<SVGSVGElement> {
  colors: {
    primary: string
    secondary: string
  }
}
