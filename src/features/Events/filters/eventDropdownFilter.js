import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import onClickOutside from 'react-onclickoutside'
import { media } from '../../../theme/media'
import { Consumer } from '../../../components/appContext'
import CheckboxSet from '../../../components/checkboxSet'
import iconDown from '../../../theme/assets/images/icon-chevron-down.svg'
import iconUp from '../../../theme/assets/images/icon-chevron-up.svg'

const Wrapper = styled.div`
  position: relative;
  line-height: 1.214;
`

const FilterButton = styled.button`
  font-family: ${props => props.theme.fonts.title};
  font-weight: 600;
  font-size: 1rem;
  width: 100%;
  background-color: ${props => props.theme.colors.lightGrey};
  border-color: ${props => props.theme.colors.lightGrey};
  color: ${props => props.theme.colors.indigo};
  padding: 11px 10px;
  display: flex;
  align-items: center;
  min-height: 48px;
  box-sizing: border-box;

  ${media.mobile`
    padding: 11px 45px 11px 20px;
  `};

  ${media.tablet`
    color: ${props => props.theme.colors.black};
    font-family: ${props => props.theme.fonts.body};
    font-weight: 500;
    font-size: 0.875rem;
    background-image: url(${props => (props.isOpen ? iconUp : iconDown)});
    background-repeat: no-repeat;
    background-position: right 20px center;
    background-color: ${props =>
      props.isOpen
        ? props.theme.colors.white
        : props.isActive && props.theme.colors.eucalyptusGreen};
    border-radius: 4px;
    border: 2px solid;
    border-color: ${props =>
      props.isOpen
        ? props.theme.colors.eucalyptusGreen
        : props.isActive
          ? props.theme.colors.eucalyptusGreen
          : props.theme.colors.lightGrey};
    transition: border-color 0.15s linear, background-color 0.15s linear;

    &:focus {
      border-color: ${props => props.theme.colors.eucalyptusGreen};
      outline: none;
    }
  `};
`

const DropDown = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    display: ${props => (props.isOpen ? 'block' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border-radius: 50%;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.eucalyptusGreen};
  height: 22px;
  width: 22px;
  line-height: 1;

  @media (min-width: ${props => props.theme.breakpoints[1]}) {
    background-color: ${props => props.theme.colors.indigo};
  }
`

class EventDropdownFilter extends Component {
  state = {
    isOpen: false,
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps.filterOpen !== nextProps.filterName) {
      return { isOpen: false }
    }

    return { isOpen: true }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.isOpen !== nextState.isOpen
  }

  handleClickOutside = () => {
    if (this.props.filterName === this.props.filterOpen) {
      this.setState({ isOpen: false }, () => {
        this.props.closeSiblingFilters(this.props.filterName, this.state.isOpen)
      })
    }
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen }, () =>
      this.props.closeSiblingFilters(this.props.filterName, this.state.isOpen)
    )
  }

  render() {
    return (
      <Consumer>
        {context => (
          <Wrapper>
            <FilterButton
              aria-controls={this.props.filterName}
              aria-expanded={this.state.isOpen}
              type="button"
              id={`button_${this.props.filterName}`}
              onClick={this.toggleMenu}
              isOpen={this.state.isOpen}
              isActive={context.state.filters[this.props.filterName].length > 0}
            >
              {this.props.heading}
              {context.state.filters[this.props.filterName].length > 0 ? (
                <Badge>
                  {context.state.filters[this.props.filterName].length}
                </Badge>
              ) : null}
            </FilterButton>
            <DropDown
              isOpen={this.state.isOpen}
              id={this.props.filterName}
              aria-hidden={!this.state.isOpen}
              aria-labelledby={`button_${this.props.filterName}`}
            >
              <CheckboxSet filterName={this.props.filterName} />
            </DropDown>
          </Wrapper>
        )}
      </Consumer>
    )
  }
}

EventDropdownFilter.propTypes = {
  heading: PropTypes.string.isRequired,
  filterName: PropTypes.string.isRequired,
  closeSiblingFilters: PropTypes.func.isRequired,
  filterOpen: PropTypes.bool.isRequired,
}

export default onClickOutside(EventDropdownFilter)
