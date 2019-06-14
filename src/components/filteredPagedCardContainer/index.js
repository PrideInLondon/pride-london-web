import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { filterTypes } from '../../constants'
import FilterContainer, { calculateIsSelected } from '../filterContainer'
import PagedCardContainer from '../pagedCardContainer'

export const calculateInitialSelected = (filterType, showAllCategoryTitle) => {
  switch (filterType) {
    case 'checkbox':
      return showAllCategoryTitle ? [showAllCategoryTitle] : []
    case 'radio':
      return showAllCategoryTitle
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
  }
}

export const calculateShouldShowCard = (
  filterType,
  selected,
  category,
  showAllCategoryTitle
) => {
  switch (filterType) {
    case 'checkbox': {
      return selected.includes(showAllCategoryTitle)
        ? true
        : category.some(cat => selected.includes(cat))
    }
    case 'radio':
      return selected === showAllCategoryTitle
        ? true
        : category.includes(selected)
  }
}

const FilteredCardContainer = ({
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

  return (
    <>
      <FilterContainer
        filterType={filterType}
        categories={categories}
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

FilteredCardContainer.propTypes = {
  filterType: PropTypes.oneOf(filterTypes).isRequired,
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

FilteredCardContainer.defaultProps = {
  pageSize: 6,
  showAllCategoryTitle: '',
  showMoreButtonText: 'Show more',
}

export default FilteredCardContainer
