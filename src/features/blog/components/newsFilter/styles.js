import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const FilterText = styled.p`
  border: 2px solid;
  background-color: ${props =>
    props.isOutline ? 'transparent' : props.backgroundColor};
  border-color: ${props => props.backgroundColor};
  border-radius: 4px;
  color: ${props => (props.isOutline ? theme.colors.black : props.textColor)};
  cursor: pointer;
  display: inline-block;
  font-family: Poppins;
  font-size: 12px;
  padding: 2px 5px;
  margin: 5px 5px 0 0;
  /* margin-right: 5px; */
  white-space: nowrap;
`
