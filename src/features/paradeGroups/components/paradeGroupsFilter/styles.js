import styled from 'styled-components'
import tinycolor from 'tinycolor2'
import theme from '../../../../theme/theme'

export const getMostReadable = color =>
  tinycolor
    .mostReadable(color, [theme.colors.white, theme.colors.black], {
      includeFallbackColors: true,
      level: 'AAA',
      size: 'small',
    })
    .toHexString()

export const FilterDiv = styled.div`
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
  height: 32px;
  padding: 0 10px;
  margin-right: 10px;
  margin-bottom: 10px;
  white-space: nowrap;

  &:focus {
    outline: none;
  }
`

export const FilterText = styled.span``
