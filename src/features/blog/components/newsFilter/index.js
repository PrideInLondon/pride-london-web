import React from 'react'
import PropTypes from 'prop-types'
import { FilterTextContainer, FilterText, FilterIcon } from './styles'

const NewsFilter = ({ filterType, isOutline, handleClick, isButton, icon }) => {
  return (
    <FilterTextContainer
      onClick={() => handleClick(filterType)}
      backgroundColor={filterType.hexColour}
      isOutline={isButton ? isOutline : false}
      isButton={isButton}
    >
      {icon && <FilterIcon src={icon} alt="icon" />}
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
  icon: PropTypes.string,
}

NewsFilter.defaultProps = {
  isOutline: true,
  isButton: false,
  handleClick: () => {},
  icon: null,
}

export default NewsFilter
