import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Column } from '../../components/grid'
import { filterTypes } from '../../constants'
import FilterLabel from './filterLabel'
import { FilterContainerWrapper } from './styles'

export const calculateIsSelected = (filterType, filterName, selected) => {
  switch (filterType) {
    case 'checkbox':
      return selected.includes(filterName)
    case 'radio':
      return filterName === selected
  }
}

const FilterContainer = ({
  filterType,
  categories,
  selected,
  handleFilterSelect,
}) => (
  <Container>
    <Row>
      <Column width={1} py={[20, 20, 40]}>
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

FilterContainer.propTypes = {
  filterType: PropTypes.oneOf(filterTypes).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, hexColour: PropTypes.string })
  ).isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
}

export default FilterContainer
