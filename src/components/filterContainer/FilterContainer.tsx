import React from 'react'
import { Container, Row, Column } from '../../components/grid'
import FilterLabel from './FilterLabel'
import { FilterContainerWrapper } from './FilterContainer.styles'
import { FilterContainerProps } from './FilterContainer.types'
import { FilterType } from './FilterLabel.types'

export const calculateIsSelected = (
  filterType: FilterType,
  filterName: string | string[],
  selected: string | string[]
): boolean => {
  switch (filterType) {
    case 'checkbox':
      return Array.isArray(filterName)
        ? // checkbox may be a multiselect component, so check at least one could be in currently selected
          filterName.some(name => selected.includes(name))
        : selected.includes(filterName)
    case 'radio':
      return Array.isArray(filterName) ? false : filterName === selected
    default:
      return false
  }
}

const FilterContainer: React.FC<FilterContainerProps> = ({
  filterType,
  categories,
  selected,
  handleFilterSelect,
}) => (
  <Container>
    <Row>
      <Column width={1} py={['20px', '20px', '40px']}>
        <FilterContainerWrapper>
          {categories.map(({ title, hexColour }) => {
            return (
              <FilterLabel
                key={title}
                filterName={title}
                filterColour={hexColour}
                filterType={filterType}
                isSelected={calculateIsSelected(filterType, title, selected)}
                handleSelect={handleFilterSelect}
              />
            )
          })}
        </FilterContainerWrapper>
      </Column>
    </Row>
  </Container>
)

export default FilterContainer
