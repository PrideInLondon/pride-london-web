import React from 'react'
import PropTypes from 'prop-types'
import NewsMetrics from '../newsMetrics'
import NewsCategory from '../newsCategory'
import { NewsCardHeaderContainer } from './styles'

export const NewsCardHeader = ({
  category,
  datePublished,
  readTime,
  className,
}) => (
  <NewsCardHeaderContainer className={className}>
    <NewsCategory category={category} />
    <NewsMetrics datePublished={datePublished} readTime={readTime} />
  </NewsCardHeaderContainer>
)

NewsCardHeader.propTypes = {
  category: PropTypes.object.isRequired,
  datePublished: PropTypes.string.isRequired,
  readTime: PropTypes.number,
  className: PropTypes.string,
}

NewsCardHeader.defaultProps = {
  className: '',
  readTime: null,
}

export default NewsCardHeader
