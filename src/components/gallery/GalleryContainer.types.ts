export const GALLERY_CONTAINER_VARIANTS = ['grid', 'masonry'] as const

type GalleryContainerVariant = typeof GALLERY_CONTAINER_VARIANTS[number]

export interface GalleryContainerBaseProps {
  columns: { [key: string]: number }
}

export interface GalleryContainerProps extends GalleryContainerBaseProps {
  variant: GalleryContainerVariant
}
