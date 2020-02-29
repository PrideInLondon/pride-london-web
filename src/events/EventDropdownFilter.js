import React, { useState, useRef, useContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import useOnClickOutside from 'use-onclickoutside'
import { media } from '../theme/media'
import theme from '../theme/theme'
import { AppContext } from '../appContext'
import { CheckboxSet } from '../components/checkboxSet'

const Wrapper = styled.div`
  position: relative;
  line-height: 1.214;
`

const FilterButton = styled.button`
  font-family: ${theme.fonts.title};
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  background-color: ${theme.colors.lightGrey};
  border-color: ${theme.colors.lightGrey};
  color: ${theme.colors.indigo};
  padding: 11px 10px;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-sizing: border-box;

  ${media.mobile`
    padding: 11px 45px 11px 20px;
  `};

  ${media.tablet`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.body};
    font-weight: 500;
    font-size: 0.875rem;
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-color: ${props =>
      props.isOpen
        ? theme.colors.white
        : props.isActive && theme.colors.eucalyptusGreen};
    border-radius: 4px;
    border: 2px solid;
    border-color: ${props =>
      props.isOpen
        ? theme.colors.eucalyptusGreen
        : props.isActive
        ? theme.colors.eucalyptusGreen
        : theme.colors.lightGrey};
    transition: border-color 0.15s linear, background-color 0.15s linear;

    &:focus {
      border-color: ${theme.colors.eucalyptusGreen};
      outline: none;
    }
  `};
`

const DropDown = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;

  ${media.tablet`
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;
    overflow-y: auto;
    height: 150px;
  `};
`

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border-radius: 50%;
  color: ${theme.colors.indigo};
  background-color: ${theme.colors.eucalyptusGreen};
  height: 22px;
  width: 22px;
  line-height: 1;
  font-size: 0.875rem;

  ${media.tablet`
    background-color: ${theme.colors.indigo};
  `};
`

const EventDropdownFilter = ({ heading, sort, filterName }) => {
  const { state, actions } = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)
  useOnClickOutside(ref, () => {
    if (filterName === state.filterOpen) {
      setIsOpen(!isOpen)
      actions.closeSiblingFilters(filterName, !isOpen)
    }
  })

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    actions.closeSiblingFilters(filterName, !isOpen)
  }

  return (
    <Wrapper ref={ref}>
      <FilterButton
        aria-controls={filterName}
        aria-expanded={isOpen}
        type="button"
        id={`button_${filterName}`}
        onClick={toggleMenu}
        isOpen={isOpen}
        isActive={state.filters[filterName].length > 0}
      >
        {heading}
        {state.filters[filterName].length > 0 ? (
          <Badge>{state.filters[filterName].length}</Badge>
        ) : null}
      </FilterButton>
      <DropDown
        isOpen={isOpen}
        id={filterName}
        aria-hidden={!isOpen}
        aria-labelledby={`button_${filterName}`}
      >
        <CheckboxSet filterName={filterName} sort={sort} />
      </DropDown>
    </Wrapper>
  )
}

EventDropdownFilter.propTypes = {
  heading: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  sort: PropTypes.oneOf(['ASC', 'DESC']),
}

EventDropdownFilter.defaultProps = {
  filterOpen: null,
  sort: null,
}
export default EventDropdownFilter
