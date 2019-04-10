import React from 'react'
import PropTypes from 'prop-types'

import { Bacground, LatestNewsCardContainer, LatestNewsCard } from './styles'

const LatestNews = ({
  datePublished,
  readLength,
  category,
  title,
  headerImage,
}) => (
  <Bacground backgroundImage={headerImage.file.url}>
    <LatestNewsCardContainer>
      <LatestNewsCard
        category={category}
        title={title}
        datePublished={datePublished}
        readLength={readLength}
      />
    </LatestNewsCardContainer>
  </Bacground>
)

LatestNews.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  headerImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  title: PropTypes.string.isRequired,
}

LatestNews.defaultProps = {
  readLength: null,
}

export default LatestNews
