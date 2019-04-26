import React from 'react'
import PropTypes from 'prop-types'
import NewsCardHeader from '../../../../components/newsCardHeader'
import { handleSlug } from '../../../../utilities'
import { Card, CardTitle } from './styles'

const NewsCard = ({
  slug,
  datePublished,
  category,
  title,
  readTime,
  className,
}) => (
  <Card className={className} to={handleSlug(slug)}>
    <NewsCardHeader
      category={category}
      datePublished={datePublished}
      readTime={readTime}
    />
    <CardTitle>{title}</CardTitle>
  </Card>
)

NewsCard.propTypes = {
  slug: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

NewsCard.defaultProps = {
  readTime: null,
  className: '',
}

export default NewsCard
