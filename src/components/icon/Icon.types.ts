import { LayoutProps } from 'styled-system'

export interface IconProps extends LayoutProps {
  name: string
  variant: 'indigo' | 'white'
}

export interface InternalIconProps {
  colors: {
    primary: string
    secondary: string
  }
}
