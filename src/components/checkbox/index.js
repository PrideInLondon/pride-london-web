import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'
import checkmark from '../../theme/assets/images/icon-check.svg'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 100%;
`

const Input = styled.input`
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border: solid 2.5px ${props => props.theme.colors.eucalyptusGreen};
  background-color: ${props => props.theme.colors.white};
  order: 1;
  flex-shrink: 0;
  cursor: pointer;

  &:focus {
    border-color: ${props => props.theme.colors.indigo};
    outline: none;
  }

  &:checked {
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center center;

    & + label {
      font-weight: 700;
    }
  }
`

const Label = styled.label`
  font-size: 0.875rem;
  line-height: 1.43;
  flex-grow: 1;
  align-self: stretch;
  display: flex;
  align-items: center;

  ${media.tablet`
    cursor: pointer;
  `};
`

class Checkbox extends Component {
  constructor(props) {
    super(props)

    this.state = {
      checked: this.props.checked,
    }
  }

  static getDerivedStateFromProps(nextProps) {
    return { checked: nextProps.checked }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.checked !== this.state.checked
  }

  toggleCheckbox = e => {
    this.setState({ checked: e.target.checked })

    if (this.props.handleChange) {
      this.props.handleChange(e)
    }
  }

  render() {
    return (
      <Wrapper>
        <Input
          type="checkbox"
          id={this.props.id}
          value={this.props.value}
          name={this.props.name}
          onChange={this.toggleCheckbox}
          checked={this.state.checked}
        />
        <Label htmlFor={this.props.id}>{this.props.label}</Label>
      </Wrapper>
    )
  }
}

Checkbox.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool.isRequired,
}

Checkbox.defaultProps = {
  handleChange: null,
  label: '',
  id: '',
  value: '',
  name: '',
}

export default Checkbox
