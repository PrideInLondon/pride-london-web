import React from 'react'
import PropTypes from 'prop-types'
import NewsFilter from '../newsFilter'
import NewsMetrics from '../../../../components/newsMetrics'
import { Card, CardHeader, CardTitle, UnderlineContainer } from './styles'

const NewsCard = ({ date, filterType, title, readLength, className }) => (
  <Card className={className}>
    <CardHeader>
      <NewsFilter filterType={filterType} isOutline={false} />
      <NewsMetrics datePublished={date} readLength={readLength} />
    </CardHeader>
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
