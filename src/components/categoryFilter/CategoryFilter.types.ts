export const CATEGORY_FILTER_VARIANTS = ['checkbox', 'radio'] as const

export type CategoryFilterVariant = typeof CATEGORY_FILTER_VARIANTS[number]

export interface Category {
  name: string
  color: string
}

export interface CategoryFilterProps {
  variant: CategoryFilterVariant
  categories: Category[]
}
