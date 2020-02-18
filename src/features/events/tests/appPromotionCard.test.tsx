import React from 'react'
import { render } from '@testing-library/react'
import { title, description } from '../components/appPromotionCard'
import { GroupedEventsCards, AppPromotionCard } from '../index'
import { mockNodes, testEvent } from './__mocks__'

describe('AppPromotionCard', () => {
  const { findByText } = render(<AppPromotionCard />)

  it('correct header', () => {
    expect(findByText(title)).toBeTruthy()
  })

  it('correct text', () => {
    expect(findByText(description)).toBeTruthy()
  })
})

describe('GroupedEventsCards: AppPromotionCard is rendered at a index of 3 in ', () => {
  const { findByText } = render(
    <GroupedEventsCards
      event={testEvent}
      index={3}
      events={mockNodes}
      toLoad={24}
    />
  )

  it('App card has index of 3', () => {
    expect(findByText(title)).toBeTruthy()
  })
})
