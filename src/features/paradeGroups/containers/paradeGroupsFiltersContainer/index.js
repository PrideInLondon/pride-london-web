import React from 'react'
import PropTypes from 'prop-types'
import ParadeGroupsFilter from '../../components/paradeGroupsFilter'
import { paradeGroupFilterPropType } from '../../paradeGroupFilterPropType'
import { ParadeGroupsFiltersWrapper } from './styles'

const ParadeGroupsFilterContainer = ({
  handleFilterClick,
  selectedFilter,
  categories,
}) => {
  return (
    <ParadeGroupsFiltersWrapper>
      {categories.map(filterType => {
        return (
          <ParadeGroupsFilter
            key={filterType.title}
            handleClick={handleFilterClick}
            filterType={filterType}
            isOutline={selectedFilter.title !== filterType.title}
            isButton
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
