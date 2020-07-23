import { LayoutProps, SpaceProps } from 'styled-system'
import FixedObject from 'gatsby-image'
import { Category } from '../../components/filterContainer/FilterContainer.types'

export interface GalleryCardProps extends LayoutProps, SpaceProps {
  artist: {
    name: string
  }
  artwork: {
    title: string
    year: string
    sold: boolean
    guidePrice: string
    image: { fixed: FixedObject; altText: string }
    category: Category
  }
}
