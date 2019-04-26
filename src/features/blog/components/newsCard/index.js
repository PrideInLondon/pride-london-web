import React from 'react'
import PropTypes from 'prop-types'
import NewsCardHeader from '../../../../components/newsCardHeader'
import { Card, CardTitle } from './styles'

const NewsCard = ({
  id,
  datePublished,
  category,
  title,
  readTime,
  className,
}) => (
  <Card className={className} to={`/blog/${id}`}>
    <NewsCardHeader
      category={category}
      datePublished={datePublished}
      readTime={readTime}
    />
    <CardTitle>{title}</CardTitle>
  </Card>
)

NewsCard.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  id: PropTypes.string.isRequired,
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
