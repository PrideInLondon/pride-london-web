import React, { useState } from 'react'
import PropTypes from 'prop-types'
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
  pageSize: PropTypes.number,
  cardContent: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.any })),
  CardComponent: PropTypes.node.isRequired,
  showMoreButtonText: PropTypes.string,
}

PagedCardContainer.defaultProps = {
  pageSize: 6,
  cardContent: [],
  showMoreButtonText: 'Show more',
}

export default PagedCardContainer
