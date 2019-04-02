import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, StyledInput, Label } from './styles'

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
