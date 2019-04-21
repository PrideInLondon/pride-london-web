import React from 'react'
import PropTypes from 'prop-types'

import { Background, LatestNewsCardContainer, NewsCard } from './styles'

const LatestNews = ({
  datePublished,
  readLength,
  category,
  title,
  headerImage,
}) => (
  <Background backgroundImage={headerImage.file.url}>
    <LatestNewsCardContainer>
      <NewsCard
        category={category}
        title={title}
        datePublished={datePublished}
        readLength={readLength}
      />
    </LatestNewsCardContainer>
  </Background>
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
