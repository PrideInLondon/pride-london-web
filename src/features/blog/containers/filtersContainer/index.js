import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import NewsFilter from '../../components/newsFilter'
import config from '../../components/newsFilter/config'
import { Container } from './styles'

const FilterContainer = ({ handleFilterClick, selectedFilter, categories }) => {
  console.log(categories)
  return (
    <Container>
      {categories.map(({ id, hexColour, title }) => {
        return (
          <NewsFilter
            key={id}
            colour={hexColour}
            handleClick={handleFilterClick}
            filterType={title}
            isOutline={selectedFilter !== title}
            isButton
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
