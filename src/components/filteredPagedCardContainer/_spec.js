import React from 'react'
import { shallow, mount } from 'enzyme'
import FilteredPagedCardContainer, {
  calculateInitialSelected,
  calculateSelected,
  calculateShouldShowCard,
} from './'

describe('calculateInitialSelected', () => {
  it('with checkbox filter type returns array containing only the "all" category', () => {
    const initialSelected = calculateInitialSelected('checkbox', 'foo')

    expect(initialSelected).toEqual(['foo'])
  })

  it('with checkbox filter type returns empty array when no "all" category', () => {
    const initialSelected = calculateInitialSelected('checkbox', '')

    expect(initialSelected).toEqual([])
  })

  it('with radio filter type returns the "all" category', () => {
    const initialSelected = calculateInitialSelected('radio', 'foo')

    expect(initialSelected).toEqual('foo')
  })

  it('with radio filter type returns empty string when no "all" category', () => {
    const initialSelected = calculateInitialSelected('radio', '')

    expect(initialSelected).toEqual('')
  })
})

describe('calculateSelected', () => {
  describe('with checkbox filter type', () => {
    it('should add filter to selected if not already a member', () => {
      const filterNameSelected = 'baz'
      const currentlySelected = ['foo', 'bar']
      const showAllCategoryTitle = ''

      const selected = calculateSelected(
        'checkbox',
        filterNameSelected,
        currentlySelected,
        showAllCategoryTitle
      )

      expect(selected).toEqual(['foo', 'bar', 'baz'])
    })

    it('should remove filter from selected if already a member', () => {
      const filterNameSelected = 'bar'
      const currentlySelected = ['foo', 'bar', 'baz']
      const showAllCategoryTitle = ''

      const selected = calculateSelected(
        'checkbox',
        filterNameSelected,
        currentlySelected,
        showAllCategoryTitle
      )

      expect(selected).toEqual(['foo', 'baz'])
    })

    it('should deselect any non-"all" category filters when "all" is selected', () => {
      const filterNameSelected = 'foo'
      const currentlySelected = ['foo', 'bar', 'baz']
      const showAllCategoryTitle = 'foo'

      const selected = calculateSelected(
        'checkbox',
        filterNameSelected,
        currentlySelected,
        showAllCategoryTitle
      )

      expect(selected).toEqual(['foo'])
    })

    it('should deselect any "all" category filters when non-"all" is selected', () => {
      const filterNameSelected = 'bar'
      const currentlySelected = ['foo']
      const showAllCategoryTitle = 'foo'

      const selected = calculateSelected(
        'checkbox',
        filterNameSelected,
        currentlySelected,
        showAllCategoryTitle
      )

      expect(selected).toEqual(['bar'])
    })

    it('should reselect any "all" category filters when all non-"all" are deselected', () => {
      const filterNameSelected = 'foo'
      const currentlySelected = ['foo']
      const showAllCategoryTitle = 'bar'

      const selected = calculateSelected(
        'checkbox',
        filterNameSelected,
        currentlySelected,
        showAllCategoryTitle
      )

      expect(selected).toEqual(['bar'])
    })
  })

  describe('with radio filter type', () => {
    it('should name filter as selected if not already selected', () => {
      const filterNameSelected = 'bar'
      const currentlySelected = 'foo'

      const selected = calculateSelected(
        'radio',
        filterNameSelected,
        currentlySelected
      )

      expect(selected).toEqual('bar')
    })
  })
})

describe('calculateShouldShowCard', () => {
  describe('with checkbox filter type', () => {
    it('returns true if category is selected for current card', () => {
      const shouldShowCard = calculateShouldShowCard(
        'checkbox',
        ['foo', 'bar'],
        ['etc', 'foo'],
        ''
      )

      expect(shouldShowCard).toBeTruthy()
    })

    it('returns false if category is not selected for current card', () => {
      const shouldShowCard = calculateShouldShowCard(
        'checkbox',
        ['foo', 'bar'],
        ['baz', 'etc'],
        ''
      )

      expect(shouldShowCard).toBeFalsy()
    })

    it('returns true if category selected is "all"', () => {
      const shouldShowCard = calculateShouldShowCard(
        'checkbox',
        ['foo'],
        ['baz'],
        'foo'
      )

      expect(shouldShowCard).toBeTruthy()
    })
  })

  describe('with radio filter type', () => {
    it('returns true if category is selected for current card', () => {
      const shouldShowCard = calculateShouldShowCard(
        'radio',
        'foo',
        ['foo', 'etc'],
        ''
      )

      expect(shouldShowCard).toBeTruthy()
    })

    it('returns false if category is not selected for current card', () => {
      const shouldShowCard = calculateShouldShowCard(
        'radio',
        'foo',
        ['bar', 'etc'],
        ''
      )

      expect(shouldShowCard).toBeFalsy()
    })

    it('returns true if category selected is "all"', () => {
      const shouldShowCard = calculateShouldShowCard(
        'checkbox',
        'foo',
        ['baz'],
        'foo'
      )

      expect(shouldShowCard).toBeTruthy()
    })
  })
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

  it.only('snaps back to one page displayed on filter change', () => {
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
