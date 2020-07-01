export const FILTER_TYPES = ['checkbox', 'radio'] as const

export interface LabelProps {
  filterColour: string
  isSelected: boolean
}

export interface FilterLabelProps extends LabelProps {
  filterName: string
  filterType: typeof FILTER_TYPES[number]
  handleSelect: (selectedFilterName: string) => void
}
