import styled from 'styled-components'
import { rgba } from 'polished'
import theme from '../../theme/theme'

export const Field = styled.div`
  margin-bottom: 20px;
  position: relative;
`

export const StyledInput = styled.input`
  appearance: none;
  border: 2px solid transparent;
  border-radius: 4px;
  height: 58px;
  background-color: ${rgba(theme.colors.black, 0.2)};
  font-family: ${theme.fonts.body};
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.21;
  color: ${theme.colors.white};
  padding: 21px 20px;
  width: 100%;
  transition: padding 0.15s linear, border-color 0.15s linear;

  &:focus {
    padding: 31px 20px 11px 20px;
    border: 2px solid ${theme.colors.eucalyptusGreen};
    outline: none;
  }
`

export const Label = styled.label`
  position: absolute;
  transition: all 0.15s linear;
  top: ${props => (!props.focused && props.empty ? '21px' : '10px')};
  left: 20px;
  color: ${props =>
    !props.focused && props.empty
      ? theme.colors.white
      : theme.colors.eucalyptusGreen};
  font-family: ${theme.fonts.body};
  font-weight: 500;
  font-size: ${props =>
    !props.focused && props.empty ? '0.875rem' : '0.75rem'};
  line-height: 1.21;
  opacity: ${props =>
    props.focused ? 1 : !props.focused && props.empty ? 1 : 0};
`
