import React from 'react'
import PropTypes from 'prop-types'
import { handleSlug } from '../../../../utilities'
import { ArticleTitle, ViewsSlide, ViewsThumbnail } from './styles'

const ViewsCard = ({ featuredImage, title, slug }) => {
  return (
    <ViewsSlide to={handleSlug(slug)}>
      <ViewsThumbnail fixed={featuredImage.fixed} alt={title} />
      <ArticleTitle>{title}</ArticleTitle>
    </ViewsSlide>
  )
}

ViewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  featuredImage: PropTypes.shape({
    fixed: PropTypes.any,
  }).isRequired,
}

export default ViewsCard
