import styled from 'styled-components'
import theme from '../../../../theme/theme'
import ChevronRight from '../../../../components/chevronRight'

export const Title = styled.h2`
  font-weight: bold;
  margin: 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 22px;
`

export const Link = styled.a`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: normal;
  color: ${theme.colors.black};
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 200ms ease-out;
  cursor: pointer;
  &:hover {
    border-bottom-color: ${theme.colors.eucalyptusGreen};
  }
`

export const StyledChevronRight = styled(ChevronRight)`
  width: 9px;
`
