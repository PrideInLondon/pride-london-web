import styled from 'styled-components'
import { hideVisually } from 'polished'
import theme from '../../theme/theme'
import { getMostReadable } from '../../utils/color-utils'

export const Label = styled.label`
  align-items: center;
  border: 2px solid;
  background-color: ${({ isSelected, backgroundColor }) =>
    isSelected ? backgroundColor : 'transparent'};
  border-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 4px;
  color: ${({ isSelected, backgroundColor }) =>
    isSelected ? getMostReadable(backgroundColor) : theme.colors.black};
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
