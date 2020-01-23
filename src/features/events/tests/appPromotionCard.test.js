import React from 'react'
import { render } from '@testing-library/react'
import AppPromotionCard from '../components/appPromotionCard'

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
