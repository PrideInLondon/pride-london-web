import React from 'react'
import PropTypes from 'prop-types'
import CardContainer from './cardContainer'
import ShowMoreButton from './showMoreButton'

const PagedCardContainer = ({
  cardContent,
  CardComponent,
  moreCardsToShow,
  showMoreButtonText,
  onShowMoreButtonClick,
}) => (
  <>
    <CardContainer cardContent={cardContent} CardComponent={CardComponent} />
    {moreCardsToShow && (
      <ShowMoreButton
        text={showMoreButtonText}
        onClick={onShowMoreButtonClick}
      />
    )}
  </>
)

PagedCardContainer.propTypes = {
  cardContent: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.any })),
  CardComponent: PropTypes.node.isRequired,
  moreCardsToShow: PropTypes.bool.isRequired,
  showMoreButtonText: PropTypes.string,
  onShowMoreButtonClick: PropTypes.func.isRequired,
}

PagedCardContainer.defaultProps = {
  cardContent: [],
  moreCardsToShow: false,
  showMoreButtonText: 'Show more',
  onShowMoreButtonClick: () => {},
}

export default PagedCardContainer
