import React from 'react'
import PropTypes from 'prop-types'
import NewsMetrics from '../newsMetrics'
import NewsCategory from '../newsCategory'
import { NewsCardHeaderContainer } from './styles'

export const NewsCardHeader = ({
  category,
  datePublished,
  readLength,
  className,
}) => {
  return (
    <NewsCardHeaderContainer className={className}>
      <NewsCategory category={category} />
      <NewsMetrics datePublished={datePublished} readLength={readLength} />
    </NewsCardHeaderContainer>
  )
}

NewsCardHeader.propTypes = {
  category: PropTypes.object.isRequired,
  datePublished: PropTypes.string.isRequired,
  readLength: PropTypes.string,
  className: PropTypes.string,
}

NewsCardHeader.defaultProps = {
  className: '',
  readLength: '',
}

export default NewsCardHeader
