import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import theme from '../../theme/theme'

const Field = styled.div`
  margin-bottom: 20px;
  position: relative;
`

const StyledInput = styled.input`
  appearance: none;
  border: 2px solid transparent;
  border-radius: 4px;
  height: 58px;
  background-color: ${rgba(theme.colors.black, 0.2)};
  font-family: ${theme.fonts.body};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.21;
  color: ${theme.colors.white};
  padding: 21px 20px;
  width: 100%;
  transition: padding 0.15s linear, border-color 0.15s linear;

  &:focus {
    padding: 31px 20px 11px 20px;
    border: 2px solid ${theme.colors.eucalyptusGreen};
    outline: none;
  }
`

const Label = styled.label`
  position: absolute;
  transition: all 0.15s linear;
  top: ${props => (!props.focused && props.empty ? '21px' : '10px')};
  left: 20px;
  color: ${props =>
    !props.focused && props.empty
      ? theme.colors.white
      : theme.colors.eucalyptusGreen};
  font-family: ${theme.fonts.body};
  font-weight: 500;
  font-size: ${props =>
    !props.focused && props.empty ? '0.875rem' : '0.75rem'};
  line-height: 1.21;
  opacity: ${props =>
    props.focused ? 1 : !props.focused && props.empty ? 1 : 0};
`

class Input extends Component {
  state = {
    value: '',
    focused: false,
  }

  handleChange = e => {
    this.setState({ value: e.target.value }, () => {
      if (this.props.handleChange) {
        this.props.handleChange(this.state.value)
      }
    })
  }

  render() {
    return (
      <Field className={this.props.className}>
        <StyledInput
          type={this.props.type}
          id={this.props.id}
          value={this.state.value}
          onChange={this.handleChange}
          required={this.props.required}
          onFocus={() => this.setState({ focused: true })}
          onBlur={() => this.setState({ focused: false })}
        />
        <Label
          htmlFor={this.props.id}
          focused={this.state.focused}
          empty={this.state.value.length === 0}
        >
          {this.props.label}
        </Label>
      </Field>
    )
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  required: PropTypes.bool,
  handleChange: PropTypes.func,
  className: PropTypes.string,
}

Input.defaultProps = {
  required: false,
  handleChange: null,
  className: null,
}

export default Input
