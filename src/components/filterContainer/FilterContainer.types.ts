import { FilterType } from './FilterLabel.types'

export interface Category {
  title: string
  hexColour: string
}

export interface FilterContainerProps {
  filterType: FilterType
  categories: Category[]
  selected: string | string[]
  handleFilterSelect: (selectedFilterName: string) => void
}
