import { LayoutProps, SpaceProps } from 'styled-system'
import { FluidObject } from 'gatsby-image'
import { Category } from '../../components/categoryFilter/CategoryFilter.types'

export interface GalleryCardProps extends LayoutProps, SpaceProps {
  to: string
  artist: {
    name: string
  }
  artwork: {
    title: string
    year: string
    sold: boolean
    guidePrice: string
    image: {
      fluid: FluidObject
      alt: string
    }
    category: Category
  }
}
