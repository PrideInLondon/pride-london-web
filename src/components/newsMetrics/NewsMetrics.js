import React from 'react'
import PropTypes from 'prop-types'
import NewsDate from '../../features/blog/components/newsDate'
import { NewsMetricsContainer, ReadTime } from './NewsMetrics.styles'

const CenterDot = () => <span> • </span>
export const NewsMetrics = ({ datePublished, readTime, className }) => {
  return (
    <NewsMetricsContainer className={className}>
      <NewsDate date={datePublished} />
      {readTime && (
        <>
          <CenterDot />
          <ReadTime>{readTime} min read</ReadTime>
        </>
      )}
    </NewsMetricsContainer>
  )
}

NewsMetrics.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  className: PropTypes.string,
}

NewsMetrics.defaultProps = {
  readTime: null,
  className: 'className',
}

export default NewsMetrics
