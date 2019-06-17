import React from 'react'
import PropTypes from 'prop-types'
import FilterButton from '../../../../components/filterButton'
import { paradeGroupFilterPropType } from '../../paradeGroupFilterPropType'
import { ParadeGroupsFiltersWrapper, ParadeGroupsFilterLabel } from './styles'

const ParadeGroupsFilterContainer = ({
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

ParadeGroupsFilterContainer.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(paradeGroupFilterPropType).isRequired,
}

export default ParadeGroupsFilterContainer
