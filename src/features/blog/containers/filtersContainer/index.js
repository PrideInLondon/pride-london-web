import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Column } from '../../../../components/grid'
import { FilterButton } from '../../../../components/filterButton'
import { FiltersWrapper } from './styles'

const FilterContainer = ({ handleFilterClick, selectedFilter, categories }) => {
  const filteredCategories = categories.filter(
    category => category.title !== 'Views'
  )
  return (
    <Container>
      <Row>
        <Column width={1} py={[20, 20, 40]}>
          <FiltersWrapper>
            {filteredCategories.map(filterType => {
              return (
                <FilterButton
                  key={filterType.title}
                  handleClick={handleFilterClick}
                  filterType={filterType}
                  isOutline={selectedFilter.title !== filterType.title}
                  isButton
                  filterName="newsFilter"
                />
              )
            })}
          </FiltersWrapper>
        </Column>
      </Row>
    </Container>
  )
}

FilterContainer.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      hexColour: PropTypes.string,
      title: PropTypes.string,
    })
  ).isRequired,
}

export default FilterContainer
