import React from 'react'
import PropTypes from 'prop-types'
import { paradeGroupFilterPropType } from '../../paradeGroupFilterPropType'
import { FilterDiv, FilterText } from './styles'

const ParadeGroupsFilter = ({ filterType, isOutline, handleClick }) => {
  return (
    <FilterDiv
      data-test={filterType.title}
      onClick={() => handleClick(filterType)}
      backgroundColor={filterType.hexColour}
      isOutline={isOutline}
    >
      <FilterText>{filterType.title}</FilterText>
    </FilterDiv>
  )
}

ParadeGroupsFilter.propTypes = {
  isOutline: PropTypes.bool,
  handleClick: PropTypes.func,
  filterType: paradeGroupFilterPropType.isRequired,
}

ParadeGroupsFilter.defaultProps = {
  isOutline: true,
  handleClick: () => {},
}

export default ParadeGroupsFilter
