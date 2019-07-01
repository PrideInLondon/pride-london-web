import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import CardContainer from './cardContainer'
import ShowMoreButton from './showMoreButton'

const PaddedCardContainer = styled(CardContainer)`
  ${({ isFullyLoaded }) => `padding-bottom: ${isFullyLoaded ? 60 : 0}px;`}
`

const PagedCardContainer = ({
  cardContent,
  CardComponent,
  moreCardsToShow,
  showMoreButtonText,
  onShowMoreButtonClick,
}) => (
  <>
    <PaddedCardContainer
      cardContent={cardContent}
      CardComponent={CardComponent}
      isFullyLoaded={!moreCardsToShow}
    />
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
  CardComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
    .isRequired,
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
