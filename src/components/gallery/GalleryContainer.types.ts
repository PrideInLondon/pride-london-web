export const GALLERY_CONTAINER_VARIANTS = ['grid', 'masonry'] as const

type GalleryContainerVariant = typeof GALLERY_CONTAINER_VARIANTS[number]

export interface GalleryContainerProps {
  columns: { [key: string]: number }
  variant: GalleryContainerVariant
}
