import React from 'react'
import { render } from '@testing-library/react'
import { GroupedEventsCards, AppPromotionCard } from '../index'
import { mockNodes, testEvent } from './__mocks__'
import 'jest-styled-components'

global.___loader = {
  enqueue: jest.fn(),
}

describe('AppPromotionCard', () => {
  describe('renders', () => {
    const { findByText } = render(<AppPromotionCard />)

    it('correct header', () => {
      expect(findByText('Download our app')).toBeTruthy()
    })

    it('correct text', () => {
      const description =
        'Download our iOS & Android app to carry our interactive Parade map, stage line up info and afterparty information around with you on the day'
      expect(findByText(description)).toBeTruthy()
    })
  })
})

describe('AppPromotionCard is rendered at a index of 3', () => {
  const { findByText } = render(
    <GroupedEventsCards
      event={testEvent}
      index={3}
      events={mockNodes}
      toLoad={24}
    />
  )

  it('App card has index of 3', () => {
    expect(findByText('Download our app')).toBeTruthy()
  })
})
