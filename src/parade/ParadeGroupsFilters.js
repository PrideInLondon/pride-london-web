import React from 'react'
import PropTypes from 'prop-types'
import { FilterButton } from '../components/filterButton'
import { paradeGroupFilterPropType } from './ParadeGroupsFilters.types'
import {
  ParadeGroupsFiltersWrapper,
  ParadeGroupsFilterLabel,
} from './ParadeGroupsFilters.styles'

const ParadeGroupsFilters = ({
  handleFilterClick,
  selectedFilter,
  categories,
}) => {
  return (
    <ParadeGroupsFiltersWrapper>
      <ParadeGroupsFilterLabel>
        Filter groups by category
      </ParadeGroupsFilterLabel>
      {categories.map(filterType => {
        return (
          <FilterButton
            key={filterType.title}
            handleClick={handleFilterClick}
            filterType={filterType}
            isOutline={selectedFilter.title !== filterType.title}
            isButton
            filterName="paradeGroupsFilter"
          />
        )
      })}
    </ParadeGroupsFiltersWrapper>
  )
}

ParadeGroupsFilters.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.shape({
    hexColour: PropTypes.string,
    api: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(paradeGroupFilterPropType).isRequired,
}

export default ParadeGroupsFilters
