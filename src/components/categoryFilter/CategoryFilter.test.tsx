import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { calculateInitialSelected, CategoryFilter } from './CategoryFilter'
import { ALL_CATEGORIES, ENTRIES, CATEGORIES } from './CategoryFilter.helpers'

describe('calculateInitialSelected', () => {
  it.each`
    variant       | hasSelectAll | expected
    ${'checkbox'} | ${true}      | ${[]}
    ${'checkbox'} | ${false}     | ${[CATEGORIES[0].name]}
    ${'radio'}    | ${true}      | ${''}
    ${'radio'}    | ${false}     | ${CATEGORIES[0].name}
  `(
    'should return $expected when given variant $variant and select all is $hasSelectAll',
    ({ variant, hasSelectAll, expected }) => {
      const actual = calculateInitialSelected(
        variant,
        hasSelectAll ? ALL_CATEGORIES : CATEGORIES
      )
      expect(actual).toEqual(expected)
    }
  )
})

describe('CategoryFilter', () => {
  describe('checkbox variant', () => {
    it('should select all on empty selected', async () => {
      const isChecked = async (text: string) => {
        const el = await findByText(text)
        return el.getAttribute('aria-checked') === 'true'
      }
      const clickElement = async (text: string) =>
        fireEvent.click(await findByText(text))

      const { findByText } = render(
        <CategoryFilter
          variant="checkbox"
          categories={ALL_CATEGORIES}
          entries={ENTRIES}
          render={({ entries }) => {
            return entries(({ category }) => category.name).map(({ text }) => (
              <div key={text}>{text}</div>
            ))
          }}
        />
      )
      const checkboxNameWithIsSelectAll =
        ALL_CATEGORIES.find(category => !!category.isSelectAll)?.name || ''

      const itemsWithoutIsSelectAll = ALL_CATEGORIES.filter(
        category => !category.isSelectAll
      )

      const [checkboxOneToTest, checkboxTwoToTest] = itemsWithoutIsSelectAll

      // checkboxNameWithIsSelectAll is checked by default
      expect(await isChecked(checkboxNameWithIsSelectAll)).toBe(true)

      // check checkboxes without IsSelectAll
      await clickElement(checkboxOneToTest.name)
      await clickElement(checkboxTwoToTest.name)

      // checkboxNameWithIsSelectAll is unchecked after checking at least one other category
      expect(await isChecked(checkboxNameWithIsSelectAll)).toBe(false)
      expect(await isChecked(checkboxOneToTest.name)).toBe(true)
      expect(await isChecked(checkboxTwoToTest.name)).toBe(true)

      // uncheck checkboxes without IsSelectAll
      await clickElement(checkboxOneToTest.name)
      await clickElement(checkboxTwoToTest.name)

      // checkboxNameWithIsSelectAll is checked automatically when other checkboxes are unchecked
      expect(await isChecked(checkboxNameWithIsSelectAll)).toBe(true)
    })
  })
})
