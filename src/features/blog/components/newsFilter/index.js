import React from 'react'
import PropTypes from 'prop-types'
import { FilterLabel, FilterText, FilterIcon, FilterRadio } from './styles'

const NewsFilter = ({ filterType, isOutline, handleClick, isButton, icon }) => {
  return (
    <FilterLabel
      onClick={() => handleClick(filterType)}
      backgroundColor={filterType.hexColour}
      isOutline={isButton ? isOutline : false}
      isButton={isButton}
      htmlFor={filterType.title}
      tabIndex="0"
    >
      {icon && <FilterIcon src={icon} alt="icon" />}
      <FilterText>{filterType.title}</FilterText>
      <FilterRadio
        type="radio"
        value={filterType.title}
        id={filterType.title}
        name="newsFilter"
        tabIndex="-1"
      />
    </FilterLabel>
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
