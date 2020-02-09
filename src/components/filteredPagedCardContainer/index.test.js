import React from 'react'
import { shallow, mount } from 'enzyme'
import FilteredPagedCardContainer, {
  convertCardContentCategoryObjectsToArray,
  calculateInitialSelected,
  calculateSelected,
  calculateShouldShowCard,
  calculateAvailableCategories,
} from './'

describe('convertCardContentCategoryObjectsToArray', () => {
  it.each`
    categoryType | inputCategories        | expected
    ${'array'}   | ${['Shop']}            | ${['Shop']}
    ${'array'}   | ${['Sleep', 'Eat']}    | ${['Sleep', 'Eat']}
    ${'object'}  | ${{ title: 'Events' }} | ${['Events']}
  `(
    'when category arg passed is $categoryType - eg. $inputCategories returns $expected',
    ({ categoryType, inputCategories, expected }) => {
      const categoryArray = convertCardContentCategoryObjectsToArray(
        inputCategories
      )
      expect(categoryArray).toEqual(expected)
    }
  )
})

describe('calculateInitialSelected', () => {
  it.each`
    filterType    | showAllCategoryTitle | expected
    ${'checkbox'} | ${'all'}             | ${['all']}
    ${'checkbox'} | ${''}                | ${[]}
    ${'radio'}    | ${'all'}             | ${'all'}
    ${'radio'}    | ${''}                | ${''}
  `(
    'with $filterType filter type returns $expected when show all category is $showAllCategoryTitle',
    ({ filterType, showAllCategoryTitle, expected }) => {
      const initialSelected = calculateInitialSelected(
        filterType,
        showAllCategoryTitle
      )

      expect(initialSelected).toEqual(expected)
    }
  )
})

describe('calculateSelected', () => {
  it.each`
    filterType    | filterNameSelected | currentlySelected        | showAllCategoryTitle | expected
    ${'checkbox'} | ${'baz'}           | ${['foo', 'bar']}        | ${''}                | ${['foo', 'bar', 'baz']}
    ${'checkbox'} | ${'bar'}           | ${['foo', 'bar', 'baz']} | ${''}                | ${['foo', 'baz']}
    ${'checkbox'} | ${'all'}           | ${['bar', 'baz']}        | ${'all'}             | ${['all']}
    ${'checkbox'} | ${'foo'}           | ${['foo']}               | ${'all'}             | ${['all']}
    ${'radio'}    | ${'bar'}           | ${'foo'}                 | ${''}                | ${'bar'}
  `(
    'with $filterType filter type should return $expected when selected filter is $filterNameSelected, currently selected is $currentlySelected, and show all category is $showAllCategoryTitle',
    ({
      filterType,
      filterNameSelected,
      currentlySelected,
      showAllCategoryTitle,
      expected,
    }) => {
      const selected = calculateSelected(
        filterType,
        filterNameSelected,
        currentlySelected,
        showAllCategoryTitle
      )

      expect(selected).toEqual(expected)
    }
  )
})

describe('calculateShouldShowCard', () => {
  it.each`
    filterType    | selected          | category            | showAllCategoryTitle | expected
    ${'checkbox'} | ${['foo', 'bar']} | ${['etc', 'foo']}   | ${''}                | ${true}
    ${'checkbox'} | ${['foo', 'bar']} | ${['baz', 'etc']}   | ${''}                | ${false}
    ${'checkbox'} | ${['all']}        | ${['baz']}          | ${'all'}             | ${true}
    ${'radio'}    | ${'foo'}          | ${['foo', 'etc']}   | ${''}                | ${true}
    ${'radio'}    | ${'foo'}          | ${['bar', 'etc']}   | ${''}                | ${false}
    ${'radio'}    | ${'all'}          | ${['baz']}          | ${'all'}             | ${true}
    ${'radio'}    | ${'all'}          | ${{ title: 'baz' }} | ${'all'}             | ${true}
    ${'radio'}    | ${'baz'}          | ${{ title: 'baz' }} | ${''}                | ${true}
    ${'radio'}    | ${'foo'}          | ${{ title: 'baz' }} | ${''}                | ${false}
  `(
    'with $filterType filter type should return $expected if category is $category and already selected is $selected',
    ({ filterType, selected, category, showAllCategoryTitle, expected }) => {
      const shouldShowCard = calculateShouldShowCard(
        filterType,
        selected,
        category,
        showAllCategoryTitle
      )

      expect(shouldShowCard).toBe(expected)
    }
  )
})

describe('calculateAvailableCategories', () => {
  it.each`
    cardCategories           | expected
    ${['foo', 'bar', 'baz']} | ${[{ title: 'all' }, { title: 'foo' }, { title: 'bar' }, { title: 'baz' }]}
    ${['bar', 'baz']}        | ${[{ title: 'all' }, { title: 'bar' }, { title: 'baz' }]}
    ${[]}                    | ${[]}
  `(
    'should return $expected if categories are $categories and card categories are $cardCategories',
    ({ cardCategories, expected }) => {
      const categories = [
        { title: 'all' },
        { title: 'foo' },
        { title: 'bar' },
        { title: 'baz' },
      ]
      const cardContent = cardCategories.map(category => ({
        category: [category],
      }))
      const showAllCategoryTitle = 'all'

      const availableCategories = calculateAvailableCategories(
        categories,
        showAllCategoryTitle,
        cardContent
      )

      expect(availableCategories).toEqual(expected)
    }
  )
})

describe('FilteredPagedCardContainer', () => {
  // eslint-disable-next-line react/prop-types
  const CardComponent = ({ text }) => <div>{text}</div>

  const cardContent = []
  for (let i = 0; i < 6; i++) {
    const cat = i === 1 ? 'bar' : 'foo'
    cardContent.push({
      id: `id-${cat}${i}`,
      text: `text-${cat}${i}`,
      category: [cat],
    })
  }

  const categories = ['all', 'foo', 'bar'].map(cat => ({
    title: cat,
    hexColour: `#${cat}`,
  }))

  const mountComponent = ({ filterType, ...overrideProps }) => {
    return mount(
      <FilteredPagedCardContainer
        filterType={filterType}
        categories={categories}
        cardContent={cardContent}
        CardComponent={CardComponent}
        showAllCategoryTitle="all"
        {...overrideProps}
      />
    )
  }

  it.each`
    filterType
    ${'checkbox'}
    ${'radio'}
  `('renders component with filter type $filterType', ({ filterType }) => {
    const wrapper = shallow(
      <FilteredPagedCardContainer
        filterType={filterType}
        cardContent={cardContent.slice(0, 3)}
        CardComponent={CardComponent}
        pageSize={3}
        showAllCategoryTitle="all"
        categories={categories}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it.each`
    filterType
    ${'checkbox'}
    ${'radio'}
  `(
    'with $filterType filter type shows more cards when the "show more" button is clicked',
    ({ filterType }) => {
      const wrapper = mountComponent({ filterType, pageSize: 3 })

      wrapper
        .find('FilterLabel#foo')
        .find('styles__Input')
        .simulate('click')
      wrapper.update()

      expect(wrapper.find('CardComponent')).toHaveLength(3)

      wrapper
        .find('ShowMoreButton')
        .find('Button')
        .simulate('click')
      wrapper.update()

      expect(wrapper.find('CardComponent')).toHaveLength(5)
      expect(wrapper).toMatchSnapshot()
    }
  )

  it.each`
    filterType
    ${'checkbox'}
    ${'radio'}
  `(
    'with $filterType filter type snaps back to one page displayed on filter change',
    ({ filterType }) => {
      const wrapper = mountComponent({
        filterType,
        pageSize: 1,
      })

      wrapper
        .find('ShowMoreButton')
        .find('Button')
        .simulate('click')
      wrapper.update()

      expect(wrapper.find('CardComponent')).toHaveLength(2)

      wrapper
        .find('FilterLabel#foo')
        .find('styles__Input')
        .simulate('click')
      wrapper.update()

      expect(wrapper.find('CardComponent')).toHaveLength(1)
      expect(wrapper).toMatchSnapshot()
    }
  )

  it.each`
    filterType
    ${'checkbox'}
    ${'radio'}
  `(
    'with $filterType shows only cards with the selected filter category',
    ({ filterType }) => {
      const wrapper = mountComponent({
        filterType,
        cardContent: cardContent.slice(0, 3),
      })

      wrapper
        .find('FilterLabel#foo')
        .find('styles__Input')
        .simulate('click')
      wrapper.update()

      expect(wrapper.find('CardComponent')).toHaveLength(2)
      expect(wrapper).toMatchSnapshot()
    }
  )
})
