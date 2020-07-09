import {
  SpaceProps,
  PositionProps,
  FlexboxProps,
  LayoutProps,
} from 'styled-system'

export const GALLERY_VARIANTS = ['grid', 'masonry'] as const

export type GalleryVariant = typeof GALLERY_VARIANTS[number]

export interface GalleryEntryProps
  extends SpaceProps,
    PositionProps,
    FlexboxProps,
    LayoutProps {
  variant: GalleryVariant
}

export interface GalleryProps {
  pageSize?: number
  variant: GalleryVariant
}
