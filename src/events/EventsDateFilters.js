import React from 'react'
import PropTypes from 'prop-types'
import { FilterButton } from '../components/filterButton'
import {
  EventsPageFiltersWrapper,
  EventsPageFilterLabel,
} from './EventsPageFilters.styles'

const eventsDateFilterPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  hexColour: PropTypes.string.isRequired,
})

const EventDateFilters = ({
  handleFilterClick,
  selectedFilter,
  categories,
}) => {
  return (
    <EventsPageFiltersWrapper>
      <EventsPageFilterLabel>Filter events by date</EventsPageFilterLabel>
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

EventDateFilters.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
  selectedFilter: PropTypes.shape({
    hexColour: PropTypes.string,
    api: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  categories: PropTypes.arrayOf(eventsDateFilterPropType).isRequired,
}

export default EventDateFilters
