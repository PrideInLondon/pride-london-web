import { SpaceProps, LayoutProps, PositionProps } from 'styled-system'

export interface CTABoxProps extends SpaceProps, LayoutProps, PositionProps {
  title: string
  body: string
  link?: {
    to: string
    text: string
  }
}
