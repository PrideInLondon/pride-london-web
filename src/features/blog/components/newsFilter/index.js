import React from 'react'
import PropTypes from 'prop-types'
import config from './config'
import { FilterText } from './styles'

const NewsFilter = ({ filterType, isOutline, handleClick }) => {
  const { label, textColor, backgroundColor } = config[filterType]
  return (
    <FilterText
      onClick={() => handleClick(filterType)}
      textColor={textColor}
      backgroundColor={backgroundColor}
      isOutline={isOutline}
    >
      {label}
    </FilterText>
  )
}

NewsFilter.propTypes = {
  isOutline: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
}

NewsFilter.defaultProps = {
  isOutline: true,
}

export default NewsFilter
