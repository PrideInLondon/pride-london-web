import React from 'react'
import PropTypes from 'prop-types'
import NewsCardHeader from '../../../../components/newsCardHeader'
import { Card, CardTitle, UnderlineContainer } from './styles'

const NewsCard = ({ date, filterType, title, readLength, className }) => (
  <Card className={className}>
    <NewsCardHeader
      category={filterType}
      datePublished={date}
      readLength={readLength}
    />
    <CardTitle>
      <UnderlineContainer>{title}</UnderlineContainer>
    </CardTitle>
  </Card>
)

NewsCard.propTypes = {
  date: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  filterType: PropTypes.shape({
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
