import React from 'react'
import { mount } from 'enzyme'
import EventInfoCard from './EventInfoCard'

describe(EventInfoCard.name, () => {
  let props
  beforeEach(() => {
    props = {
      data: {
        eventPriceLow: 10,
        locationName: 'ABC',
        accessibilityOptions: null,
      },
      pageContext: {
        id: '123',
        startTime: '1970-01-01T09:00+00:00',
        endTime: '1970-01-01T10:00+00:00',
      },
    }
  })

  it('renders recurring event date correctly', () => {
    props.pageContext = {
      ...props.pageContext,
      startTime: '2006-06-02T13:30+00:00',
      endTime: '2006-06-03T13:30+00:00',
    }
    const wrapper = mount(<EventInfoCard {...props} />)
    expect(
      wrapper
        .find('EventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006 to Saturday 3 June 2006')
  })

  it('renders single occurrence event date correctly', () => {
    props.pageContext = {
      ...props.pageContext,
      startTime: '2006-06-02T13:30+00:00',
      endTime: '2006-06-02T13:30+00:00',
    }
    const wrapper = mount(<EventInfoCard {...props} />)
    expect(
      wrapper
        .find('EventInfoCard__Title')
        .first()
        .text()
    ).toBe('Friday 2 June 2006')
  })

  it.each`
    accessibilityOptions                                               | expected
    ${null}                                                            | ${'Accessibility is limited. Please contact venue for further info.'}
    ${["My venue doesn't cater for any of these accessibility needs"]} | ${'Accessibility is limited. Please contact venue for further info.'}
    ${['Foo', 'Bar', 'Baz']}                                           | ${'Foo, Bar, Baz.'}
  `(
    'shows a11y info as $expected for event with accessibility options $accessibilityOptions',
    ({ accessibilityOptions, expected }) => {
      props.data.accessibilityOptions = accessibilityOptions
      const wrapper = mount(<EventInfoCard {...props} />)
      expect(
        wrapper
          .find('EventInfoCard__Detail')
          .at(1)
          .text()
      ).toBe(expected)
    }
  )
})
