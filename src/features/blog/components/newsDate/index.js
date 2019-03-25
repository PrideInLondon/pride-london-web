import React from 'react'
import PropTypes from 'prop-types'
import { StyledDate } from './styles'

const NewsDate = ({ date }) => (
  <StyledDate>
    {new Date(date).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })}
  </StyledDate>
)

NewsDate.propTypes = {
  date: PropTypes.string.isRequired,
}
export default NewsDate
