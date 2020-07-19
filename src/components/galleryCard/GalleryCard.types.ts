import { LayoutProps, SpaceProps } from 'styled-system'

export interface GalleryCardProps extends LayoutProps, SpaceProps {
  artWorkTitle: string
  artistName: string
  date: string
  priceOrSold: string
  image: {
    src: string
    srcSet: string
    width: number
    height: number
  }
  altText: string
  tagContent: string
}
