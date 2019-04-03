import React from 'react'
import PropTypes from 'prop-types'
import NewsDate from '../../../../blog/components/newsDate'
import {
  Card,
  CardHeader,
  ReadLength,
  CardTitle,
  UnderlineContainer,
  NewsCategory,
  NewsMetrics,
} from './styles'

const CenterDot = () => <span>·</span>

const LatestNewsCard = ({ date, newsCategory, title, readLength }) => (
  <Card>
    <CardHeader>
      <NewsCategory backgroundColor={newsCategory.hexColour}>
        {newsCategory.title}
      </NewsCategory>
      <NewsMetrics>
        <NewsDate date={date} />
        {readLength && (
          <>
            <CenterDot />
            <ReadLength>{readLength}</ReadLength>
          </>
        )}
      </NewsMetrics>
    </CardHeader>
    <CardTitle>
      <UnderlineContainer>{title}</UnderlineContainer>
    </CardTitle>
  </Card>
)

LatestNewsCard.propTypes = {
  date: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  newsCategory: PropTypes.shape({
    hexColour: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
}

LatestNewsCard.defaultProps = {
  readLength: '10 min read',
}

export default LatestNewsCard
