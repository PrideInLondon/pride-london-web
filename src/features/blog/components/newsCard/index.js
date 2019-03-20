import React from 'react'
import PropTypes from 'prop-types'
import NewsFilter from '../newsFilter'
import { Card, CardHeader, NewsDate, ReadLength, CardTitle } from './styles'

const CenterDot = () => <span>·</span>

const NewsCard = ({ type }) => (
  <Card>
    <CardHeader>
      <NewsFilter filterType={type} />
      <NewsDate>12 Jun 2019</NewsDate>
      <CenterDot />
      <ReadLength>10 min read</ReadLength>
    </CardHeader>
    <CardTitle>
      Pride in London sees record number of parade applications
    </CardTitle>
  </Card>
)

NewsCard.propTypes = {
  type: PropTypes.string.isRequired,
}

export default NewsCard
