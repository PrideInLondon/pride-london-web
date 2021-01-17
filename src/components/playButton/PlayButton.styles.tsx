import styled from 'styled-components'
import { compose, border, position, space } from 'styled-system'
import { colors } from '../../theme/colors'
import { PlayButtonProps } from './PlayButton.types'

export const Button = styled.button<PlayButtonProps>`
  /* can't use styled-system here due to types issue and ColorProps properties */
  background-color: ${colors.indigo};

  cursor: pointer;

  ${compose(border, position, space)}
`
