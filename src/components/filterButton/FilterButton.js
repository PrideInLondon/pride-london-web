import React from 'react'
import PropTypes from 'prop-types'
import {
  FilterLabel,
  FilterText,
  FilterIcon,
  FilterRadio,
} from './FilterButton.styles'

const FilterButton = ({
  filterType,
  isOutline,
  handleClick,
  isButton,
  icon,
  filterName,
}) => {
  return (
    <FilterLabel
      onClick={(e) => {
        e.preventDefault()
        handleClick(filterType)
      }}
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
        name={filterName}
        tabIndex="-1"
      />
    </FilterLabel>
  )
}

FilterButton.propTypes = {
  isButton: PropTypes.bool,
  isOutline: PropTypes.bool,
  handleClick: PropTypes.func,
  filterType: PropTypes.shape({
    title: PropTypes.string,
    hexColour: PropTypes.string,
  }).isRequired,
  icon: PropTypes.string,
  filterName: PropTypes.string,
}

FilterButton.defaultProps = {
  isOutline: true,
  isButton: false,
  handleClick: () => {},
  icon: null,
  filterName: 'filter',
}

export default FilterButton
