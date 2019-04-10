import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardTitle, UnderlineContainer, NewsCardHeader } from './styles'

const LatestNewsCard = ({
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

LatestNewsCard.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  category: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

LatestNewsCard.defaultProps = {
  readLength: '10 min read',
  className: '',
}

export default LatestNewsCard
