import styled from 'styled-components'
import tinycolor from 'tinycolor2'
import { hideVisually } from 'polished'
import theme from '../../../../theme/theme'

export const getMostReadable = color =>
  tinycolor
    .mostReadable(color, [theme.colors.white, theme.colors.black], {
      includeFallbackColors: true,
      level: 'AAA',
      size: 'small',
    })
    .toHexString()

export const FilterLabel = styled.label`
  align-items: center;
  border: 2px solid;
  background-color: ${props =>
    props.isOutline ? 'transparent' : props.backgroundColor};
  border-color: ${props => props.backgroundColor};
  border-radius: 4px;
  color: ${props =>
    props.isOutline
      ? theme.colors.black
      : getMostReadable(props.backgroundColor)};
  cursor: pointer;
  display: flex;
  font-family: ${theme.fonts.title};
  font-size: 1rem;
  height: ${props => (props.isButton ? '32px' : '23px')};
  justify-content: center;
  padding: ${props => (props.isButton ? '0 10px' : '0 2px')};
  margin-right: 10px;
  margin-bottom: 10px;
  white-space: nowrap;
`

export const FilterText = styled.span``

export const FilterIcon = styled.img`
  margin-right: 3px;
  height: 11px;
`

export const FilterRadio = styled.input.attrs({ type: 'radio' })`
  ${hideVisually()};
`
