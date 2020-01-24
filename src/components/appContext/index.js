import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
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

class Provider extends Component {
  constructor() {
    super()
    this.state = {
      ...initialState,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.events !== prevState.events) {
      const allEventOccurences = []

      nextProps.events.forEach(event => {
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
      return {
        events: allEventOccurences
          .filter(filterPastEvents)
          .sort((a, b) =>
            a.node.startTime < b.node.startTime
              ? -1
              : a.node.startTime > b.node.startTime
              ? 1
              : 0
          ),
      }
    }
  }

  getDatepickerValues = ({ startDate, endDate }) => {
    this.setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        startDate,
        endDate,
      },
    }))
  }

  setDate = (dateToSet, dateToGet) => {
    this.setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        [dateToSet]: prevState.filters[dateToGet],
      },
    }))
  }

  getCheckboxBool = (name, checked) => {
    this.setState(prevState => ({
      ...prevState,
      filters: {
        ...prevState.filters,
        free: checked,
      },
    }))
  }

  getCheckboxSetValues = (e, name) => {
    const state = {
      ...this.state,
      filters: { ...this.state.filters },
    }

    if (
      e.target.checked &&
      state.filters[name].indexOf(e.target.value) === -1
    ) {
      state.filters[name].push(e.target.value)
    } else {
      const index = state.filters[name].indexOf(e.target.value)
      if (index > -1) {
        this.state.filters[name].splice(index, 1)
      }
    }

    this.setState(state)
  }

  clearFilters = () => {
    this.setState({
      filterOpen: null,
      filters: getInitialFilterState(),
    })
  }

  closeSiblingFilters = (filterName, isOpen) => {
    if (isOpen && filterName != this.state.filterOpen) {
      this.setState(prevState => ({
        ...prevState,
        filterOpen: filterName,
      }))
    } else {
      this.setState(prevState => ({
        ...prevState,
        filterOpen: null,
      }))
    }
  }

  filterEvents = () => {
    const filteredEvents = this.state.events
      .filter(filterByDate, {
        startDate: this.state.filters.startDate,
        endDate: this.state.filters.endDate,
      })
      .filter(filterByFree, this.state.filters.free)
      .filter(filterByCategory, {
        array: this.state.filters.eventCategories,
        key: 'eventCategories',
      })
      .filter(filterByCategory, {
        array: this.state.filters.venueDetails,
        key: 'venueDetails',
      })
      .filter(filterByCategory, {
        array: this.state.filters.accessibilityOptions,
        key: 'accessibilityOptions',
      })
      .filter(filterByCategory, {
        array: this.state.filters.audience,
        key: 'audience',
      })
      .filter(filterByArea, this.state.filters.area)
      .filter(filterByTime, this.state.filters.timeOfDay)

    return filteredEvents
  }

  showMore = filteredCount => {
    if (this.state.eventsToShow < filteredCount) {
      this.setState({
        eventsToShow: this.state.eventsToShow + constants.itemsToLoad,
      })
    }
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
          filteredEvents: this.filterEvents(),
          actions: {
            getCheckboxBool: this.getCheckboxBool,
            getDatepickerValues: this.getDatepickerValues,
            getCheckboxSetValues: this.getCheckboxSetValues,
            clearFilters: this.clearFilters,
            closeSiblingFilters: this.closeSiblingFilters,
            showMore: this.showMore,
            setDate: this.setDate,
          },
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }
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

export { Provider, Consumer }
