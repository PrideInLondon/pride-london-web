import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'
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
  border: solid 2.5px ${theme.colors.eucalyptusGreen};
  background-color: ${theme.colors.white};
  order: 1;
  flex-shrink: 0;
  cursor: pointer;

  &:focus {
    border-color: ${theme.colors.indigo};
    outline: none;
  }

  &:checked {
    background-image: url(${checkmark});
    background-repeat: no-repeat;
    background-position: center center;
    background-color: ${theme.colors.eucalyptusGreen};

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

const Checkbox = ({ checked, handleChange, id, value, name, label }) => {
  const [checkedState, setCheckedState] = useState(checked)

  useEffect(() => {
    setCheckedState(checked)
  }, [checked])

  const toggleCheckboxHandler = e => {
    setCheckedState(e.target.checked)

    if (handleChange) {
      handleChange(e)
    }
  }

  return (
    <Wrapper>
      <Input
        type="checkbox"
        id={id}
        value={value}
        name={name}
        onChange={toggleCheckboxHandler}
        checked={checkedState}
      />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  )
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
