import React from 'react'
import PropTypes from 'prop-types'
import { FilterText } from './styles'

const NewsFilter = ({
  filterType,
  isOutline,
  handleClick,
  isButton,
  colour,
}) => {
  // const { label, textColor, backgroundColor } = config[filterType.toUpperCase()]
  return (
    <FilterText
      onClick={() => (isButton ? handleClick(filterType) : () => {})}
      textColor={'white'}
      backgroundColor={colour}
      isOutline={isButton ? isOutline : false}
    >
      {filterType}
    </FilterText>
  )
}

NewsFilter.propTypes = {
  isButton: PropTypes.bool,
  isOutline: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  filterType: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
}

NewsFilter.defaultProps = {
  isOutline: true,
  isButton: false,
}

export default NewsFilter
