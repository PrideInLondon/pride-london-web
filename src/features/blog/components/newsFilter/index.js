import React from 'react'
import PropTypes from 'prop-types'
import { FilterTextContainer, FilterText } from './styles'

const NewsFilter = ({ filterType, isOutline, handleClick, isButton }) => {
  return (
    <FilterTextContainer
      onClick={() => handleClick(filterType)}
      backgroundColor={filterType.hexColour}
      isOutline={isButton ? isOutline : false}
      isButton={isButton}
    >
      <FilterText>{filterType.title}</FilterText>
    </FilterTextContainer>
  )
}

NewsFilter.propTypes = {
  isButton: PropTypes.bool,
  isOutline: PropTypes.bool,
  handleClick: PropTypes.func,
  filterType: PropTypes.shape({
    title: PropTypes.string,
    hexColour: PropTypes.string,
  }).isRequired,
}

NewsFilter.defaultProps = {
  isOutline: true,
  isButton: false,
  handleClick: () => {},
}

export default NewsFilter
