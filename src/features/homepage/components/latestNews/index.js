import React from 'react'
import PropTypes from 'prop-types'
import { handleSlug } from '../../../../utilities'
import { Background, LatestNewsCardContainer, NewsCard } from './styles'

const LatestNews = ({
  datePublished,
  readTime,
  category,
  title,
  headerImage,
  slug,
}) => (
  <Background to={handleSlug(slug)} backgroundImage={headerImage.file.url}>
    <LatestNewsCardContainer>
      <NewsCard
        category={category}
        title={title}
        datePublished={datePublished}
        readTime={readTime}
        slug={slug}
        renderAs={'div'}
      />
    </LatestNewsCardContainer>
  </Background>
)

LatestNews.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readTime: PropTypes.string,
  slug: PropTypes.string.isRequired,
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
  readTime: null,
}

export default LatestNews
