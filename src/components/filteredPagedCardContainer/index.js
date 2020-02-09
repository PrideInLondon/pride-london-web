import React, { useState } from 'react'
import PropTypes from 'prop-types'
import constants from '../../constants'
import FilterContainer, { calculateIsSelected } from '../filterContainer'
import PagedCardContainer from '../pagedCardContainer'

export const calculateInitialSelected = (filterType, showAllCategoryTitle) => {
  switch (filterType) {
    case 'checkbox':
      return showAllCategoryTitle ? [showAllCategoryTitle] : []
    case 'radio':
      return showAllCategoryTitle
    default:
      return
  }
}

export const calculateSelected = (
  filterType,
  filterNameSelected,
  currentlySelected,
  showAllCategoryTitle
) => {
  const initialSelected = calculateInitialSelected(
    filterType,
    showAllCategoryTitle
  )
  if (filterNameSelected === showAllCategoryTitle) return initialSelected

  switch (filterType) {
    case 'checkbox': {
      const isCurrentlySelected = calculateIsSelected(
        filterType,
        filterNameSelected,
        currentlySelected
      )
      const filteredSelected = currentlySelected.filter(
        selected => selected !== showAllCategoryTitle
      )
      const newlySelected = isCurrentlySelected
        ? filteredSelected.filter(current => current !== filterNameSelected)
        : [...filteredSelected, filterNameSelected]
      return newlySelected.length === 0 ? initialSelected : newlySelected
    }
    case 'radio':
      return filterNameSelected
    default:
      return
  }
}

// Card content with multiple categories will be array,
// but content with single category eg. News Articles will be an object
export const convertCardContentCategoryObjectsToArray = category =>
  Array.isArray(category) ? category : [category.title]

export const calculateShouldShowCard = (
  filterType,
  selected,
  category, // can be array or object
  showAllCategoryTitle
) => {
  const categoryArr = convertCardContentCategoryObjectsToArray(category)

  switch (filterType) {
    case 'checkbox': {
      return selected.includes(showAllCategoryTitle)
        ? true
        : categoryArr.some(cat => selected.includes(cat))
    }
    case 'radio':
      return selected === showAllCategoryTitle
        ? true
        : categoryArr.includes(selected)
    default:
      return
  }
}

export const calculateAvailableCategories = (
  categories,
  showAllCategoryTitle,
  cardContent
) => {
  const cardCategories = cardContent.map(content =>
    convertCardContentCategoryObjectsToArray(content.category)
  )
  const flattenedUniqueCardCategories = [...new Set(cardCategories.flat())]

  const availableCategories = categories.filter(
    category =>
      category.title === showAllCategoryTitle ||
      flattenedUniqueCardCategories.includes(category.title)
  )

  return availableCategories.length === 1 &&
    availableCategories[0].title === showAllCategoryTitle
    ? []
    : availableCategories
}

const FilteredPagedCardContainer = ({
  filterType,
  categories,
  showAllCategoryTitle,
  pageSize,
  cardContent,
  CardComponent,
  showMoreButtonText,
}) => {
  const initialSelected = calculateInitialSelected(
    filterType,
    showAllCategoryTitle
  )

  const [selected, setSelected] = useState(initialSelected)
  const [numberOfCardsToShow, setNumberOfCardsToShow] = useState(pageSize)

  const filteredCards = cardContent.filter(({ category }) =>
    calculateShouldShowCard(
      filterType,
      selected,
      category,
      showAllCategoryTitle
    )
  )

  const availableCategories = calculateAvailableCategories(
    categories,
    showAllCategoryTitle,
    cardContent
  )

  return (
    <>
      <FilterContainer
        filterType={filterType}
        categories={availableCategories}
        selected={selected}
        handleFilterSelect={filterName => {
          setSelected(
            calculateSelected(
              filterType,
              filterName,
              selected,
              showAllCategoryTitle
            )
          )
          setNumberOfCardsToShow(pageSize)
        }}
      />
      <PagedCardContainer
        pageSize={pageSize}
        cardContent={filteredCards.slice(0, numberOfCardsToShow)}
        CardComponent={CardComponent}
        moreCardsToShow={numberOfCardsToShow < filteredCards.length}
        showMoreButtonText={showMoreButtonText}
        onShowMoreButtonClick={() => {
          setNumberOfCardsToShow(numberOfCardsToShow + pageSize)
        }}
      />
    </>
  )
}

FilteredPagedCardContainer.propTypes = {
  filterType: PropTypes.oneOf(constants.filterTypes).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, hexColour: PropTypes.string })
  ).isRequired,
  showAllCategoryTitle: PropTypes.string.isRequired,
  pageSize: PropTypes.number,
  cardContent: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.any }))
    .isRequired,
  CardComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
  showMoreButtonText: PropTypes.string,
}

FilteredPagedCardContainer.defaultProps = {
  pageSize: 6,
  showAllCategoryTitle: '',
  showMoreButtonText: 'Show more',
}

export default FilteredPagedCardContainer
