import React from 'react'
import PropTypes from 'prop-types'
import { handleSlug } from '../../../../utilities'
import {
  ArticleAuthor,
  ArticleTitle,
  ViewsSlide,
  ViewsThumbnail,
} from './styles'

const ViewsCard = ({ featuredImage, author, title, readTime, slug }) => {
  return (
    <ViewsSlide to={handleSlug(slug)}>
      <ViewsThumbnail
        fixed={featuredImage.fixed}
        alt={`${author.displayName} — ${title}`}
      />
      <ArticleAuthor>
        {author.displayName}
        {readTime && <span> • {readTime} min read</span>}
      </ArticleAuthor>
      <ArticleTitle>{title}</ArticleTitle>
    </ViewsSlide>
  )
}

ViewsCard.propTypes = {
  author: PropTypes.shape({
    displayName: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({}).isRequired,
  readTime: PropTypes.number,
}

ViewsCard.defaultProps = {
  readTime: null,
}

export default ViewsCard
