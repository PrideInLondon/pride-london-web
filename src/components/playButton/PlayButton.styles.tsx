import React from 'react'
import styled from 'styled-components'
import { compose, border, color, position, space } from 'styled-system'
import { PlayButtonProps } from './PlayButton.types'

export const Button = styled(props => <button {...props} />)<PlayButtonProps>`
  cursor: pointer;

  ${compose(border, color, position, space)}
`
