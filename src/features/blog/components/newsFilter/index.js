import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from './config'
import theme from '../../../../theme/theme'

const FilterText = styled.p`
	border: 2px solid;
	background-color: ${props => props.isOutline ? 'none' : props.backgroundColor};
	border-color: ${props => props.backgroundColor};
	border-radius: 4px;
	color: ${props => props.isOutline ? theme.colors.black : props.textColor};
	display: inline-block;
	font-family: Poppins;
	font-size: 12px;
	padding: 2px 5px;
	margin: 0;
  margin-right: 5px;
	white-space: nowrap;
`

const NewsFilter = ({ filterType, isOutline, handleClick }) => {
	const { label, textColor, backgroundColor } = config[filterType]
	return (
		<FilterText onClick={() => handleClick(filterType)} textColor={textColor} backgroundColor={backgroundColor} isOutline={isOutline}>
			{label}
		</FilterText>
	)
}

NewsFilter.propTypes = {
	filterType: PropTypes.string.isRequired,
}

export default NewsFilter
