import styled from 'styled-components'
import theme from '../../../theme/theme'

export const ArrowContainer = styled.button`
  position: absolute;
  z-index: 1;
  top: 50%;
  ${({ left }) => (left ? 'left: 0;' : 'right: 0;')}
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: ${theme.colors.white};
  & > svg {
    margin: 0 !important;
    display: block;
    ${({ left }) => left && 'transform: rotate(180deg);'}
    width: 12px;
    height: 19px;
  }
`
