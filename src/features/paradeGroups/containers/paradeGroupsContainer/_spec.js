import React from 'react'
import { shallow, mount } from 'enzyme'
import FilterButton from '../../../../components/filterButton'
import LetterGroup from '../../components/letterGroup'
import theme from '../../../../theme/theme'
import ParadeGroupsContainer from '.'
import 'jest-styled-components'

describe(ParadeGroupsContainer.name, () => {
  const paradeGroups = [
    { name: '23 group', id: '0', category: ['Arts'] },
    { name: 'A group', id: '1', category: ['Arts'] },
    { name: 'B group', id: '2', category: ['Business'] },
  ]

  const categories = [
    {
      title: 'All groups',
      hexColour: '#FFD95E',
    },
    {
      title: 'Arts',
      hexColour: '#FF5B44',
    },
    {
      title: 'Business',
      hexColour: '#ED2C6E',
    },
  ]

  it('should render correctly', () => {
    const wrapper = shallow(
      <ParadeGroupsContainer
        paradeGroups={paradeGroups}
        categories={categories}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should filter parade groups by category Business', () => {
    const instance = mount(
      <ParadeGroupsContainer
        paradeGroups={paradeGroups}
        categories={categories}
      />
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
      <ParadeGroupsContainer
        paradeGroups={paradeGroups}
        categories={categories}
      />
    )
    const bLetter = instance.find('a[href="#parade-group-b"]')
    const bSection = instance.find('div[id="parade-group-b"]')
    bSection.simulate('scroll')
    setTimeout(() => {
      expect(bLetter).toHaveStyleRule('color', theme.colors.indigo)
      unmount(instance)
    })
  })
})
