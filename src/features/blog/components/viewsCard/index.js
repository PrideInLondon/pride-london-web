import React from 'react'
import PropTypes from 'prop-types'
import {
  ArticleAuthor,
  ArticleTitle,
  ViewsSlide,
  ViewsThumbnail,
  ArticleLink,
} from './styles'

const ViewsCard = ({ featuredImage, author, title, id }) => {
  const photoUrl = featuredImage ? featuredImage.file.url : ''
  return (
    <ViewsSlide>
      <ViewsThumbnail
        src={`${photoUrl}?fit=crop&w=400&h=400`}
        altText={`${author.display_name.display_name} — ${title}`}
      />
      <ArticleAuthor>{author.display_name.display_name}</ArticleAuthor>
      <ArticleTitle>
        <ArticleLink to={`/blog/${id}`}>{title}</ArticleLink>
      </ArticleTitle>
    </ViewsSlide>
  )
}

ViewsCard.propTypes = {
  author: PropTypes.shape({
    display_name: PropTypes.shape({ display_name: PropTypes.string }),
  }).isRequired,
  title: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({}).isRequired,
  id: PropTypes.string.isRequired,
}

export default ViewsCard
