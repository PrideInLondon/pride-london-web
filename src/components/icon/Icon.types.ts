import { SVGProps } from 'react'
import { LayoutProps, SpaceProps } from 'styled-system'

export interface IconProps extends LayoutProps, SpaceProps {
  name: string
  variant: 'indigo' | 'white'
}

export interface InternalIconProps extends SVGProps<SVGSVGElement> {
  colors: {
    primary: string
    secondary: string
  }
}
