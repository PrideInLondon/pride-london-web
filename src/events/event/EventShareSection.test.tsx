import React from 'react'
import { render } from '@testing-library/react'
import EventShareSection, { getEventShareLinks } from './EventShareSection'

describe(EventShareSection.name, () => {
  const event = {
    name: 'Test event name',
    date: '2006-06-02T13:30+01:00',
    location: 'https://test-location.com',
  }

  const eventShareLinks = getEventShareLinks(event)

  it('should have expected href assigned', () => {
    const { getByTitle } = render(<EventShareSection {...event} />)
    eventShareLinks.forEach(({ title, href }) => {
      expect(
        decodeURI((getByTitle(title).closest('a') || {}).href || '') || ''
      ).toBe(decodeURI(href))
    })
  })
})
