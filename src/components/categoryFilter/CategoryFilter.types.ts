import { SpaceProps } from 'styled-system'

export const CATEGORY_FILTER_VARIANTS = ['checkbox', 'radio'] as const

export type CategoryFilterVariant = (typeof CATEGORY_FILTER_VARIANTS)[number]

export interface Category {
  name: string
  color: string
  isSelectAll?: boolean
}

export interface CategoryFilterProps extends SpaceProps {
  variant: CategoryFilterVariant
  categories: Category[]
}
