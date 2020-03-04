import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { filterPastEvents, getDuration, sanitizeDates } from './events/helpers'
import constants from './constants'

const AppContext = React.createContext()
const { Consumer } = AppContext

const initialState = {
  events: [],
}

class Provider extends Component {
  constructor() {
    super()
    this.state = {
      ...initialState,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.events === prevState.events) return null

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

  render() {
    return (
      <AppContext.Provider
        value={{
          state: this.state,
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

export { AppContext, Provider, Consumer }
