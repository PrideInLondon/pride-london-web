export const FILTER_TYPES = ['checkbox', 'radio'] as const

export type FilterType = (typeof FILTER_TYPES)[number]

export interface LabelProps {
  filterColour: string
  isSelected: boolean
}

export interface FilterLabelProps extends LabelProps {
  filterName: string
  filterType: FilterType
  handleSelect: (selectedFilterName: string) => void
}
