import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import constants from '../../constants'
import { NewsCardHeader } from '../../components/newsCardHeader'
import { handleSlug } from '../../utils/location-utils'
import { Card, CardTitle } from './NewsCard.styles'

const NewsCard = ({
  slug,
  datePublished,
  category,
  title,
  readTime,
  className,
  renderAs,
}) => {
  const categoryObj = Array.isArray(category)
    ? constants.articleCategories.find(obj => obj.title === category[0])
    : category

  return (
    <Card className={className} to={handleSlug(slug)} as={renderAs}>
      <NewsCardHeader
        category={categoryObj}
        datePublished={datePublished}
        readTime={readTime}
      />
      <CardTitle>{title}</CardTitle>
    </Card>
  )
}

NewsCard.propTypes = {
  slug: PropTypes.string.isRequired,
  datePublished: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  category: PropTypes.oneOfType([
    PropTypes.shape({
      hexColour: PropTypes.string,
      title: PropTypes.string,
    }),
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
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
