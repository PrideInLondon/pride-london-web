import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Column } from '../../components/grid'
import theme from '../../theme/theme'
import { filterTypes } from '../../constants'
import FilterLabel from './filterLabel'
import { FilterContainerWrapper } from './styles'

const FILTER_COLORS = [
  theme.colors.yellow,
  theme.colors.tomato,
  theme.colors.pink,
  theme.colors.greyBlue,
  theme.colors.bondiBlue,
  theme.colors.eucalyptusGreen,
  theme.colors.lemonGreen,
]

export const calculateIsSelected = (filterType, filterName, selected) => {
  switch (filterType) {
    case 'checkbox':
      return selected.includes(filterName)
    case 'radio':
      return filterName === selected
  }
}

const FilterContainer = ({
  filterType,
  filterNames,
  selected,
  handleFilterSelect,
}) => {
  return (
    <Container>
      <Row>
        <Column width={1} py={[20, 20, 40]}>
          <FilterContainerWrapper>
            {filterNames.map((filterName, index) => {
              return (
                <FilterLabel
                  key={filterName}
                  filterName={filterName}
                  filterColor={FILTER_COLORS[index]}
                  filterType={filterType}
                  isSelected={calculateIsSelected(
                    filterType,
                    filterName,
                    selected
                  )}
                  handleSelect={handleFilterSelect}
                />
              )
            })}
          </FilterContainerWrapper>
        </Column>
      </Row>
    </Container>
  )
}

FilterContainer.propTypes = {
  filterType: PropTypes.oneOf(filterTypes).isRequired,
  filterNames: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  handleFilterSelect: PropTypes.func.isRequired,
}

export default FilterContainer
