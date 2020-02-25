import {
  filterByDate,
  filterByFree,
  filterByCategory,
  filterByArea,
  filterByTime,
  filterPastEvents,
  getDuration,
  sanitizeDates,
} from '../../features/events/helpers/index'
import constants from '../../constants'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const AppContext = React.createContext()
const { Consumer } = AppContext

function getInitialFilterState() {
  return {
    startDate: null,
    endDate: null,
    free: false,
    eventCategories: [],
    venueDetails: [],
    audience: [],
    accessibilityOptions: [],
    area: [],
    timeOfDay: [],
  }
}

const initialState = {
  events: [],
  filterOpen: null,
  eventsToShow: constants.itemsToLoad,
  filters: getInitialFilterState(),
}

const HandleEvents = events => {
  const allEventOccurences = []

  events.forEach(event => {
    if (!event.node.recurrenceDates) {
      allEventOccurences.push(event)
    } else {
      const recurrenceDates = sanitizeDates([
        moment(event.node.startTime).format(constants.dateFormat),
        ...event.node.recurrenceDates,
      ])
      const time = moment(event.node.startTime).format('HH:mm')
      const duration = getDuration(event.node.startTime, event.node.endTime)

      recurrenceDates.forEach(date => {
        const copy = JSON.parse(JSON.stringify(event))

        copy.node.startTime = moment(
          `${date} ${time}`,
          'DD/MM/YYYY hh:mm'
        ).format()
        copy.node.endTime = moment(copy.node.startTime)
          .add(duration, 'milliseconds')
          .format()

        allEventOccurences.push(copy)
      })
    }
  })
  return allEventOccurences
    .filter(filterPastEvents)
    .sort((a, b) =>
      a.node.startTime < b.node.startTime
        ? -1
        : a.node.startTime > b.node.startTime
        ? 1
        : 0
    )
}

export const Provider = ({ events, children }) => {
  const [state, setState] = useState({
    ...initialState,
    events: HandleEvents(events),
  })

  const getDatepickerValues = ({ startDate, endDate }) => {
    setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        startDate,
        endDate,
      },
    }))
  }
  const setDate = (dateToSet, dateToGet) => {
    setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        [dateToSet]: prevState.filters[dateToGet],
      },
    }))
  }
  const getCheckboxBool = (name, checked) => {
    setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        free: checked,
      },
    }))
  }
  const getCheckboxSetValues = (e, name) => {
    const updatedState = {
      ...state,
      filters: {
        ...state.filters,
      },
    }
    if (
      e.target.checked &&
      updatedState.filters[name].indexOf(e.target.value) === -1
    ) {
      updatedState.filters[name].push(e.target.value)
    } else {
      const index = updatedState.filters[name].indexOf(e.target.value)
      if (index > -1) {
        state.filters[name].splice(index, 1)
      }
    }
    setState(updatedState)
  }

  const clearFilters = () => {
    setState({
      filterOpen: null,
      filters: getInitialFilterState(),
    })
  }

  const closeSiblingFilters = (filterName, isOpen) => {
    if (isOpen && filterName != state.filterOpen) {
      setState(prevState => ({
        ...prevState,
        filterOpen: filterName,
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        filterOpen: null,
      }))
    }
  }
  const filteredEvents = (events, filters) => {
    const filteredEvents = events
      .filter(filterByDate, {
        startDate: filters.startDate,
        endDate: filters.endDate,
      })
      .filter(filterByFree, filters.free)
      .filter(filterByCategory, {
        array: filters.eventCategories,
        key: 'eventCategories',
      })
      .filter(filterByCategory, {
        array: filters.venueDetails,
        key: 'venueDetails',
      })
      .filter(filterByCategory, {
        array: filters.accessibilityOptions,
        key: 'accessibilityOptions',
      })
      .filter(filterByCategory, {
        array: filters.audience,
        key: 'audience',
      })
      .filter(filterByArea, filters.area)
      .filter(filterByTime, filters.timeOfDay)

    return filteredEvents
  }
  const showMore = filteredCount => {
    if (state.eventsToShow < filteredCount) {
      setState({
        eventsToShow: state.eventsToShow + constants.itemsToLoad,
      })
    }
  }

  return (
    <AppContext.Provider
      value={{
        state,
        filteredEvents: filteredEvents(state.events, state.filters),
        actions: {
          getCheckboxBool: getCheckboxBool,
          getDatepickerValues: getDatepickerValues,
          getCheckboxSetValues: getCheckboxSetValues,
          clearFilters: clearFilters,
          closeSiblingFilters: closeSiblingFilters,
          showMore: showMore,
          setDate: setDate,
        },
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  events: PropTypes.array, // eslint-disable-line
}

Provider.defaultProps = {
  events: [],
}

export { AppContext, HandleEvents, Consumer }
