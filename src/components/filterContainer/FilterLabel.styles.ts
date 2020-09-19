import styled from 'styled-components'
import { hideVisually } from 'polished'
import theme from '../../theme/theme'
import { getMostReadable } from '../../utils/color-utils'
import { LabelProps } from './FilterLabel.types'

export const Label = styled.label<LabelProps>`
  align-items: center;
  border: 2px solid;
  background-color: ${({ isSelected, filterColour }) =>
    isSelected ? filterColour : 'transparent'};
  border-color: ${({ filterColour }) => filterColour};
  border-radius: 4px;
  color: ${({ isSelected, filterColour }) =>
    isSelected ? getMostReadable(filterColour) : theme.colors.black};
  cursor: pointer;
  display: flex;
  font-family: ${theme.fonts.title};
  font-size: 1rem;
  height: 32px;
  justify-content: center;
  padding: 0 20px;
  margin-right: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
`

export const Text = styled.span``

export const Input = styled.input.attrs(({ type }) => ({
  type,
}))`
  ${hideVisually()};
`
