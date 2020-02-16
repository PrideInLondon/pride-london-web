enum Sort {
  ASC = 'ASC',
  DESC = 'DESC',
}

export interface CheckboxSetProps {
  filterName: string
  sort: Sort | null
}
