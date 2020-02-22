import React from 'react'
import PropTypes from 'prop-types'
import { handleSlug } from '../../../../utils/location-utils'
import {
  Background,
  LatestNewsCardContainer,
  NewsCard,
  ImgWrapper,
  LatestNewsImg,
} from './styles'

const LatestNews = ({
  datePublished,
  readTime,
  category,
  title,
  headerImage,
  slug,
}) => (
  <Background to={handleSlug(slug)}>
    <ImgWrapper>
      <LatestNewsImg fixed={headerImage.fixed} alt={headerImage.title} />
    </ImgWrapper>
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
  readTime: PropTypes.number,
  slug: PropTypes.string.isRequired,
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  headerImage: PropTypes.shape({
    file: PropTypes.shape({
      url: PropTypes.string,
    }),
    fixed: PropTypes.any,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

LatestNews.defaultProps = {
  readTime: null,
}

export default LatestNews
