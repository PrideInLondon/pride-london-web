import styled from 'styled-components'
import theme from '../../../../../theme/theme'

export const Link = styled.div`
  font-family: Roboto;
  font-size: 18px;
  line-height: 1.44;
  color: ${theme.colors.black};
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 200ms ease-out;
  cursor: pointer;
  &:hover {
    border-bottom-color: ${theme.colors.eucalyptusGreen};
  }
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  margin: 3.125rem 0 1.875rem 0;
`
export const Title = styled.h2`
  margin: 0;
`
