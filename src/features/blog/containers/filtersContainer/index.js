import React from 'react'
import PropTypes from 'prop-types'
import NewsFilter from '../../components/newsFilter'
import { Container } from './styles'

const FilterContainer = ({ handleFilterClick, selectedFilter, categories }) => {
  return (
    <Container>
      {categories.map(filterType => {
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
