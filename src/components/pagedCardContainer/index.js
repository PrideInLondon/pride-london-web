import React, { useState } from 'react'
import propTypes from 'prop-types'
import CardContainer from './cardContainer'
import ShowMoreButton from './showMoreButton'

const PagedCardContainer = ({
  pageSize,
  cardContent,
  CardComponent,
  showMoreButtonText,
}) => {
  const [numberOfCardsToShow, setNumberOfCardsToShow] = useState(pageSize)

  const moreCardsToShow = numberOfCardsToShow < cardContent.length

  return (
    <>
      <CardContainer
        cardContent={cardContent.slice(0, numberOfCardsToShow)}
        CardComponent={CardComponent}
      />
      {moreCardsToShow && (
        <ShowMoreButton
          text={showMoreButtonText}
          onClick={() => setNumberOfCardsToShow(numberOfCardsToShow + pageSize)}
        />
      )}
    </>
  )
}

PagedCardContainer.propTypes = {
  pageSize: propTypes.number,
  cardContent: propTypes.arrayOf(propTypes.shape({ id: propTypes.any })),
  CardComponent: propTypes.node.isRequired,
  showMoreButtonText: propTypes.string,
}

PagedCardContainer.defaultProps = {
  pageSize: 6,
  cardContent: [],
  showMoreButtonText: 'Show more',
}

export default PagedCardContainer
