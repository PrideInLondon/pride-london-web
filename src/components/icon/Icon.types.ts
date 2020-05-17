import { LayoutProps, SpaceProps } from 'styled-system'

export interface IconProps extends LayoutProps, SpaceProps {
  name: string
  variant: 'indigo' | 'white'
}

export interface InternalIconProps {
  colors: {
    primary: string
    secondary: string
  }
}
