import React from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  CardHeader,
  CardTitle,
  UnderlineContainer,
  NewsCategory,
  NewsMetrics,
} from './styles'

const LatestNewsCard = ({ datePublished, category, title, readLength }) => (
  <Card>
    <CardHeader>
      <NewsCategory backgroundColor={category.hexColour}>
        {category.title}
      </NewsCategory>
      <NewsMetrics datePublished={datePublished} readLength={readLength} />
    </CardHeader>
    <CardTitle>
      <UnderlineContainer>{title}</UnderlineContainer>
    </CardTitle>
  </Card>
)

LatestNewsCard.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

LatestNewsCard.defaultProps = {
  readLength: '10 min read',
}

export default LatestNewsCard
