import { LayoutProps, SpaceProps } from 'styled-system'
import { GatsbyImage } from "gatsby-plugin-image";
import { Category } from '../categoryFilter/CategoryFilter.types'

export interface CategoryCardProps extends LayoutProps, SpaceProps {
  to: string
  image: GatsbyImage
  category: Category
}
