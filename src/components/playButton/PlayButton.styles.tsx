import React from 'react'
import styled from 'styled-components'
import { compose, border, color, position, space } from 'styled-system'
import { PlayButtonProps } from './PlayButton.types'

// we need to map this explicitly due to types issue with styled-components
// this can be moved back to styled.button after v5 upgrade
export const Button = styled((props) => <button {...props} />)<PlayButtonProps>`
  cursor: pointer;

  ${compose(border, color, position, space)}
`
