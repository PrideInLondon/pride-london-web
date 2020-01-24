import React from 'react'
import { shallow } from 'enzyme'
import FilterContainer, { calculateIsSelected } from '.'

const CATEGORIES = [
  { title: 'foo', hexColour: '#FFD95E' },
  { title: 'bar', hexColour: '#FF5B44' },
  { title: 'baz', hexColour: '#ED2C6E' },
]

describe('FilterContainer', () => {
  it('renders checkbox filter container', () => {
    const wrapper = shallow(
      <FilterContainer
        filterType="checkbox"
        categories={CATEGORIES}
        selected={['foo', 'baz']}
        handleFilterSelect={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('renders radio filter container', () => {
    const wrapper = shallow(
      <FilterContainer
        filterType="radio"
        categories={CATEGORIES}
        selected="bar"
        handleFilterSelect={() => {}}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})

describe('calculateIsSelected', () => {
  describe('checkbox', () => {
    it('returns true if filter is selected', () => {
      const isSelected = calculateIsSelected('checkbox', 'bar', [
        'foo',
        'bar',
        'baz',
      ])
      expect(isSelected).toBeTruthy()
    })

    it('returns false if filter is not selected', () => {
      const isSelected = calculateIsSelected('checkbox', 'bar', ['foo', 'baz'])
      expect(isSelected).toBeFalsy()
    })
  })

  describe('radio', () => {
    it('returns true if filter is selected', () => {
      const isSelected = calculateIsSelected('radio', 'bar', 'bar')
      expect(isSelected).toBeTruthy()
    })

    it('returns false if filter is not selected', () => {
      const isSelected = calculateIsSelected('radio', 'bar', 'foo')
      expect(isSelected).toBeFalsy()
    })
  })
})
