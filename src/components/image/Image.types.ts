import { LayoutProps, SpaceProps } from 'styled-system'

export interface ImageProps extends LayoutProps, SpaceProps {
  src: string
  alt: string
  caption?: string
}
