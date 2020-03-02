import React from 'react'
import { mount } from 'enzyme'
import { FilterButton } from '../components/filterButton'
import theme from '../theme/theme'
import LetterGroup from './LetterGroup'
import ParadeGroups from './ParadeGroups'

describe(ParadeGroups.name, () => {
  const paradeGroups = [
    { name: '23 group', id: '0', category: ['Arts'] },
    { name: 'A group', id: '1', category: ['Arts'] },
    { name: 'B group', id: '2', category: ['Business'] },
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

  it('should filter parade groups by category Business', () => {
    const instance = mount(
      <ParadeGroups paradeGroups={paradeGroups} categories={categories} />
    )
    const businessCategoryFilterButton = instance.find(FilterButton).last()

    businessCategoryFilterButton.simulate('click')
    setTimeout(() => {
      expect(instance.find(LetterGroup).length).toBe(1)
      instance.unmount()
    })
  })

  it('should set active letter styles on scroll to letter section', () => {
    const instance = mount(
      <ParadeGroups paradeGroups={paradeGroups} categories={categories} />
    )
    const bLetter = instance.find('a[href="#parade-group-b"]')
    const bSection = instance.find('div[id="parade-group-b"]')
    bSection.simulate('scroll')
    setTimeout(() => {
      expect(bLetter).toHaveStyleRule('color', theme.colors.indigo)
      instance.unmount()
    })
  })
})
