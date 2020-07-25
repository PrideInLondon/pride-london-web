import { LayoutProps, SpaceProps } from 'styled-system'
import { FixedObject } from 'gatsby-image'
import { Category } from '../../components/filterContainer/FilterContainer.types'

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
      fixed: FixedObject
      alt: string
    }
    category: Category
  }
}
