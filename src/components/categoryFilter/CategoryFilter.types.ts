const FILTER_TYPES = ['checkbox', 'radio'] as const

export type FilterType = typeof FILTER_TYPES[number]

export interface Category {
  name: string
  color: string
}

export interface CategoryFilterProps {
  filterType: FilterType
  categories: Category[]
  selected: string | string[]
  handleFilterSelect: (selectedFilterName: string) => void
}
