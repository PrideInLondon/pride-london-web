import React from 'react'
import PropTypes from 'prop-types'
import { FilterButton } from '../components/filterButton'
import {
  EventsPageFiltersWrapper,
  EventsPageFilterLabel,
} from './EventsPageFilters.styles'

const eventsPageFilterPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  hexColour: PropTypes.string.isRequired,
})

const EventPageFilters = ({
  handleFilterClick,
  selectedFilter,
  categories,
}) => {
  return (
    <EventsPageFiltersWrapper>
      <EventsPageFilterLabel>Filter events by category</EventsPageFilterLabel>
      {categories.map((filterType, index) => {
        return (
          <FilterButton
            key={filterType.title}
            index={index}
            handleClick={handleFilterClick}
            filterType={filterType}
            isOutline={selectedFilter.title !== filterType.title}
            isButton
            filterName="paradeGroupsFilter"
          />
        )
      })}
    </EventsPageFiltersWrapper>
  )
}

EventPageFilters.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.shape({
    hexColour: PropTypes.string,
    api: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(eventsPageFilterPropType).isRequired,
}

export default EventPageFilters
