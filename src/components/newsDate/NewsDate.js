import React from 'react'
import PropTypes from 'prop-types'

const NewsDate = ({ date }) => (
  <span>
    {new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })}
  </span>
)

NewsDate.propTypes = {
  date: PropTypes.string.isRequired,
}

export default NewsDate
