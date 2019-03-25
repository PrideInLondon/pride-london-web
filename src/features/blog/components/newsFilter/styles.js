import styled from 'styled-components'
import tinycolor from 'tinycolor2'
import theme from '../../../../theme/theme'

const getMostReadable = color =>
  tinycolor
    .mostReadable(color, [theme.colors.white, theme.colors.black], {
      includeFallbackColors: true,
      level: 'AA',
      size: 'large',
    })
    .toHexString()

export const FilterTextContainer = styled.p`
  align-items: center;
  border: 2px solid;
  background-color: ${props =>
    props.isOutline ? 'transparent' : props.backgroundColor};
  border-color: ${props => props.backgroundColor};
  border-radius: 4px;
  color: ${props =>
    props.isOutline ? theme.colors.black : getMostReadable(props.textColor)};
  cursor: pointer;
  display: flex;
  font-family: Poppins;
  font-size: 12px;
  height: ${props => (props.isButton ? '32px' : '23px')};
  justify-content: center;
  padding: ${props => (props.isButton ? '0 5px' : '0 2px')};
  margin-right: 5px;
  margin-bottom: 0;
  white-space: nowrap;
`

export const FilterText = styled.span``

export const FilterIcon = styled.img`
  margin-right: 3px;
  height: 11px;
`
