import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
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
  renderAs,
}) => (
  <Card className={className} to={handleSlug(slug)} as={renderAs}>
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
  readTime: PropTypes.string,
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

NewsCard.defaultProps = {
  readTime: null,
  className: '',
  renderAs: Link,
}

export default NewsCard
