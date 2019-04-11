import React from 'react'
import PropTypes from 'prop-types'
import NewsDate from '../../features/blog/components/newsDate'
import { NewsMetricsContainer, ReadLength } from './styles'

const CenterDot = () => <span> · </span>
export const NewsMetrics = ({ datePublished, readLength, className }) => {
  return (
    <NewsMetricsContainer className={className}>
      <NewsDate date={datePublished} />
      {readLength && (
        <>
          <CenterDot />
          <ReadLength>{readLength}</ReadLength>
        </>
      )}
    </NewsMetricsContainer>
  )
}

NewsMetrics.propTypes = {
  datePublished: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  className: PropTypes.string,
}

NewsMetrics.defaultProps = {
  readLength: null,
  className: 'className',
}

export default NewsMetrics
