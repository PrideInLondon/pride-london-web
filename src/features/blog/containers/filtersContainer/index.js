import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsFilter from '../../components/newsFilter';
import config from '../../components/newsFilter/config'
import { Container } from './styles'

const FilterContainer = ({handleFilterClick, selectedFilter }) => {
return( <Container>
	{ 
		Object.keys(config).map((filterType) => {
			return <NewsFilter handleClick={handleFilterClick} filterType={filterType} isOutline={selectedFilter !== filterType}/>
		})

	}
	</Container>)
}

FilterContainer.propTypes = { 
	isSelected: PropTypes.bool
}

FilterContainer.defaultProps ={ 
	isSelected: false
}

export default FilterContainer
