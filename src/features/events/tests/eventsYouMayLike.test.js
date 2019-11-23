import React from 'react'
import { shallow } from 'enzyme'
import { ThemeProvider, ThemeConsumer } from 'styled-components'
import { EventsYouMayLike } from '../components/eventsYouMayLike'
import EventListingCard from '../components/eventListingCard'
import importedTheme from '../../../theme/theme'

beforeEach(() => {
  jest.resetModules()
})

jest.mock('../../../components/appContext', () => {
  const nodeOne = {
    node: {
      id: '123',
      startTime: '2035-06-02T13:30+01:00',
      eventsListPicture: {
        file: {
          url: '123123',
        },
      },
    },
  }

  const nodeTwo = {
    node: {
      id: '234',
      startTime: '2006-06-02T13:30+01:00',
      eventsListPicture: {
        file: {
          url: '123123',
        },
      },
    },
  }

  const nodeThree = {
    node: {
      id: '1234',
      startTime: '2035-06-02T13:30+01:00',
      eventsListPicture: {
        file: {
          url: '123123',
        },
      },
    },
  }

  return {
    Consumer: props =>
      props.children({
        state: {
          events: [nodeOne, nodeTwo, nodeThree],
        },
      }),
  }
})

const shallowWithTheme = (tree, theme = importedTheme) => {
  const context = shallow(<ThemeProvider theme={theme} />)
  ThemeConsumer._currentValue = theme
  return shallow(tree, { context })
}

describe('The Events You May Like component', () => {
  const mockProps = {
    eventId: '1234',
  }

  it('should matchsnapshot', () => {
    const wrapper = shallowWithTheme(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.dive()).toMatchSnapshot()
  })

  it('should render Event Listing Card if a correct event is passed from the state', () => {
    const wrapper = shallowWithTheme(<EventsYouMayLike {...mockProps} />)

    expect(wrapper.dive().find(EventListingCard).length).toBe(1)
  })

  it('should not render an item that started in the past', () => {
    const wrapper = shallowWithTheme(<EventsYouMayLike {...mockProps} />)

    expect(
      wrapper
        .dive()
        .find(EventListingCard)
        .props().event.startTime
    ).not.toBe('2006-06-02T13:30+01:00')
  })

  it('should not render an item that has the same id as the current event', () => {
    const wrapper = shallowWithTheme(<EventsYouMayLike {...mockProps} />)

    expect(
      wrapper
        .dive()
        .find(EventListingCard)
        .props().event.id
    ).not.toBe(mockProps.eventId)
  })
})
