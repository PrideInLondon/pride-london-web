import React, { ChangeEvent, useCallback, useState } from 'react'
import { Field, StyledInput, Label } from './Input.styles'
import { InputProps } from './Input.types'

const Input = ({
  type,
  label,
  id,
  required = false,
  onChange = null,
  className,
}: InputProps) => {
  const [value, setValue] = useState<string>('')
  const [focused, setFocused] = useState<boolean>(false)
  const empty: boolean = value.length === 0

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
      onChange && onChange(e.target.value)
    },
    [setValue, onChange]
  )

  return (
    <Field className={className}>
      <StyledInput
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <Label htmlFor={id} focused={focused} empty={empty}>
        {label}
      </Label>
    </Field>
  )
}

export default Input
