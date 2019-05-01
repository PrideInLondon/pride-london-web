import React from 'react'
import PropTypes from 'prop-types'
import {
  ArticleAuthor,
  ArticleTitle,
  ViewsSlide,
  ViewsThumbnail,
  ArticleLink,
} from './styles'

const ViewsCard = ({ featuredImage, author, title, id, readTime }) => {
  const photoUrl = featuredImage ? featuredImage.file.url : ''
  return (
    <ViewsSlide>
      <ViewsThumbnail
        src={`${photoUrl}?fit=crop&w=400&h=400`}
        alt={`${author.displayName} — ${title}`}
      />
      <ArticleAuthor>
        {author.displayName}
        {readTime && <span> • {readTime} min read</span>}
      </ArticleAuthor>
      <ArticleTitle>
        <ArticleLink to={`/blog/${id}`}>{title}</ArticleLink>
      </ArticleTitle>
    </ViewsSlide>
  )
}

ViewsCard.propTypes = {
  author: PropTypes.shape({
    displayName: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({}).isRequired,
  readTime: PropTypes.number,
}

ViewsCard.defaultProps = {
  readTime: null,
}

export default ViewsCard
