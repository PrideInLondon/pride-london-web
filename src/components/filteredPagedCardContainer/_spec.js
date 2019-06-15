import React from 'react'
import { shallow, mount } from 'enzyme'
import FilteredPagedCardContainer, {
  calculateInitialSelected,
  calculateSelected,
  calculateShouldShowCard,
} from './'

describe('calculateInitialSelected', () => {
  it.each`
    filterType    | showAllCategoryTitle | expected
    ${'checkbox'} | ${'foo'}             | ${['foo']}
    ${'checkbox'} | ${''}                | ${[]}
    ${'radio'}    | ${'foo'}             | ${'foo'}
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
    ${'checkbox'} | ${'foo'}           | ${['foo', 'bar', 'baz']} | ${'foo'}             | ${['foo']}
    ${'checkbox'} | ${'foo'}           | ${['foo']}               | ${'bar'}             | ${['bar']}
    ${'radio'}    | ${'bar'}           | ${'foo'}                 | ${''}                | ${'bar'}
  `(
    'with $filterType should return $expected when selected filter is $filterNameSelected, currently selected is $currentlySelected, and show all category is $showAllCategoryTitle',
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
    filterType    | selected          | category          | showAllCategoryTitle | expected
    ${'checkbox'} | ${['foo', 'bar']} | ${['etc', 'foo']} | ${''}                | ${true}
    ${'checkbox'} | ${['foo', 'bar']} | ${['baz', 'etc']} | ${''}                | ${false}
    ${'checkbox'} | ${['foo']}        | ${['baz']}        | ${'foo'}             | ${true}
    ${'radio'}    | ${'foo'}          | ${['foo', 'etc']} | ${''}                | ${true}
    ${'radio'}    | ${'foo'}          | ${['bar', 'etc']} | ${''}                | ${false}
    ${'radio'}    | ${'foo'}          | ${['baz']}        | ${'foo'}             | ${true}
  `(
    'with $filterType should return $expected if category is $category and already selected is $selected',
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

describe('FilteredPagedCardContainer', () => {
  // eslint-disable-next-line react/prop-types
  const CardComponent = ({ text }) => <div>{text}</div>

  const cardContent = [
    {
      id: 'id-foo',
      text: 'text-foo',
      category: ['foo'],
    },
    {
      id: 'id-bar',
      text: 'text-bar',
      category: ['bar'],
    },
    {
      id: 'id-foo2',
      text: 'text-foo2',
      category: ['foo'],
    },
  ]

  const moreCardContent = [
    ...cardContent,
    {
      id: 'id-foo3',
      text: 'text-foo3',
      category: ['foo'],
    },
    {
      id: 'id-foo4',
      text: 'text-foo4',
      category: ['foo'],
    },
    {
      id: 'id-foo5',
      text: 'text-foo5',
      category: ['foo'],
    },
  ]

  const categories = [
    { title: 'foo', hexColour: '#foo' },
    { title: 'bar', hexColour: '#bar' },
    { title: 'baz', hexColour: '#baz' },
  ]

  it('snaps back to one page displayed on filter change', () => {
    const wrapper = mount(
      <FilteredPagedCardContainer
        filterType="radio"
        categories={categories}
        cardContent={moreCardContent}
        CardComponent={CardComponent}
        pageSize={1}
        showAllCategoryTitle="bar"
      />
    )

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
  })

  describe('with checkbox filter type', () => {
    it('renders component', () => {
      const wrapper = shallow(
        <FilteredPagedCardContainer
          filterType="checkbox"
          cardContent={cardContent}
          CardComponent={CardComponent}
          pageSize={3}
          showAllCategoryTitle="foo"
          categories={categories}
        />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('shows only cards with the selected filter category', () => {
      const wrapper = mount(
        <FilteredPagedCardContainer
          filterType="checkbox"
          categories={categories}
          cardContent={cardContent}
          CardComponent={CardComponent}
        />
      )

      wrapper
        .find('FilterLabel#foo')
        .find('styles__Input')
        .simulate('click')
      wrapper.update()

      expect(wrapper.find('CardComponent')).toHaveLength(2)
      expect(wrapper).toMatchSnapshot()
    })

    it('shows more cards when the "show more" button is clicked', () => {
      const wrapper = mount(
        <FilteredPagedCardContainer
          filterType="checkbox"
          categories={categories}
          cardContent={moreCardContent}
          CardComponent={CardComponent}
          pageSize={3}
        />
      )

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
    })
  })

  describe('with radio filter type', () => {
    it('renders component', () => {
      const wrapper = shallow(
        <FilteredPagedCardContainer
          filterType="radio"
          cardContent={cardContent}
          CardComponent={CardComponent}
          pageSize={3}
          showAllCategoryTitle="foo"
          categories={categories}
        />
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('shows only cards with the selected filter category', () => {
      const wrapper = mount(
        <FilteredPagedCardContainer
          filterType="radio"
          categories={categories}
          cardContent={cardContent}
          CardComponent={CardComponent}
        />
      )

      wrapper
        .find('FilterLabel#foo')
        .find('styles__Input')
        .simulate('click')
      wrapper.update()

      expect(wrapper.find('CardComponent')).toHaveLength(2)
      expect(wrapper).toMatchSnapshot()
    })

    it('shows more cards when the "show more" button is clicked', () => {
      const wrapper = mount(
        <FilteredPagedCardContainer
          filterType="radio"
          categories={categories}
          cardContent={moreCardContent}
          CardComponent={CardComponent}
          pageSize={3}
        />
      )

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
    })
  })
})
