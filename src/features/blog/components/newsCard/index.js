import React from 'react'
import PropTypes from 'prop-types'
import NewsCardHeader from '../../../../components/newsCardHeader'
import { Card, CardTitle, UnderlineContainer } from './styles'

const NewsCard = ({
  datePublished,
  category,
  title,
  readLength,
  className,
}) => (
  <Card className={className}>
    <NewsCardHeader
      category={category}
      datePublished={datePublished}
      readLength={readLength}
    />
    <CardTitle>
      <UnderlineContainer>{title}</UnderlineContainer>
    </CardTitle>
  </Card>
)

NewsCard.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

NewsCard.defaultProps = {
  readLength: null,
  className: '',
}

export default NewsCard
