import React from 'react'
import PropTypes from 'prop-types'
import NewsFilter from '../newsFilter'
import {
  Card,
  CardHeader,
  NewsDate,
  ReadLength,
  CardTitle,
  UnderlineContainer,
} from './styles'

const CenterDot = () => <span>·</span>

const NewsCard = ({ date, filterType, title, readLength }) => (
  <Card>
    <CardHeader>
      <NewsFilter filterType={filterType} isOutline={false} />
      <NewsDate>
        {new Date(date).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        })}
      </NewsDate>
      {readLength && (
        <>
          <CenterDot />
          <ReadLength>10 min read</ReadLength>
        </>
      )}
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
}

NewsCard.defaultProps = {
  readLength: null,
}

export default NewsCard
