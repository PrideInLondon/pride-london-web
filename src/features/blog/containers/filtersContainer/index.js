import React from 'react'
import PropTypes from 'prop-types'
import NewsFilter from '../../components/newsFilter'
import { Container, Row, Column } from '../../../../components/grid'
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
                <NewsFilter
                  key={filterType.title}
                  handleClick={handleFilterClick}
                  filterType={filterType}
                  isOutline={selectedFilter.title !== filterType.title}
                  isButton
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
