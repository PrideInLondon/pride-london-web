import { LayoutProps, SpaceProps } from 'styled-system'
import { FluidObject } from 'gatsby-image'
import { Category } from '../categoryFilter/CategoryFilter.types'

export interface CategoryCardProps extends LayoutProps, SpaceProps {
  to: string
  image: FluidObject
  category: Category
}
