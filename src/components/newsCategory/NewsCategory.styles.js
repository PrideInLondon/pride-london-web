import styled from 'styled-components'
import theme from '../../theme/theme'

export const NewsCategoryContainer = styled.div`
  border: 2px solid ${props => props.backgroundColor};
  background-color: ${props => props.backgroundColor};
  border-radius: 4px;
  color: ${theme.colors.white};
  font-family: ${theme.fonts.title};
  font-size: 14px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  white-space: nowrap;
  padding: 2px 4px;
  margin-right: 10px;
`

export const StarWrapper = styled.span`
  margin-right: 5px;
`
