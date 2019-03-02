import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from './config'

const FilterText = styled.p`
  background-color: ${props => props.backgroundColor};
  border-radius: 4px;
  color: ${props => props.textColor};
  display: inline-block;
  font-size: 12px;
  padding: 2px 5px;
  margin: 0;
  white-space: nowrap;
`

const NewsFilter = ({ filterType }) => {
  const { label, textColor, backgroundColor } = config[filterType]
  return (
    <FilterText textColor={textColor} backgroundColor={backgroundColor}>
      {label}
    </FilterText>
  )
}

NewsFilter.propTypes = {
  filterType: PropTypes.string.isRequired,
}

export default NewsFilter
