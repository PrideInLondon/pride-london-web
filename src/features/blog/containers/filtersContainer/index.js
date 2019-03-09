import React from 'react'
import PropTypes from 'prop-types'
import NewsFilter from '../../components/newsFilter'
import config from '../../components/newsFilter/config'
import { Container } from './styles'

const FilterContainer = ({ handleFilterClick, selectedFilter }) => {
  return (
    <Container>
      {Object.keys(config).map(filterType => {
        return (
          <NewsFilter
            key={filterType}
            handleClick={handleFilterClick}
            filterType={filterType}
            isOutline={selectedFilter !== filterType}
          />
        )
      })}
    </Container>
  )
}

FilterContainer.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string,
}

FilterContainer.defaultProps = {
  selectedFilter: '',
}

export default FilterContainer
