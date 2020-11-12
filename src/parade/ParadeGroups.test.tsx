import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { axe } from 'jest-axe'
import theme from '../theme/theme'
import ParadeGroups from './ParadeGroups'

describe('Parade Groups', () => {
  const paradeGroups = [
    { name: '23 group', id: '0', category: 'ARTS' },
    { name: 'A group', id: '1', category: 'ARTS' },
    { name: 'B group', id: '2', category: 'BUSINESS' },
  ]

  const categories = [
    {
      title: 'All groups',
      api: 'MAGIC_VALUE_NOT_USED',
      hexColour: theme.colors.yellow,
    },
    {
      title: 'Arts',
      api: 'ARTS',
      hexColour: theme.colors.tomato,
    },
    {
      title: 'Business',
      api: 'BUSINESS',
      hexColour: theme.colors.pink,
    },
  ]

  it('should filter parade groups by category ', () => {
    const { getByLabelText, getByText } = render(
      <ParadeGroups paradeGroups={paradeGroups} categories={categories} />
    )
    fireEvent.click(getByLabelText('Business'))
    expect(getByText('B group')).toBeVisible()
  })

  it('should set active letter styles', () => {
    const { getByLabelText, getByText, getByRole } = render(
      <ParadeGroups paradeGroups={paradeGroups} categories={categories} />
    )
    fireEvent.click(getByLabelText('Arts'))
    expect(getByText('A group')).toBeVisible()
    fireEvent.click(getByRole('link', { name: /a/i }))
  })

  it('should have no accessibility violations', async () => {
    const { container } = render(
      <ParadeGroups paradeGroups={paradeGroups} categories={categories} />
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
