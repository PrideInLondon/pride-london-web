import styled from 'styled-components'
import { getMostReadable } from '../../newsFilter/styles'
import theme from '../../../../../theme/theme'

export const CardTitle = styled.h3`
  color: ${theme.colors.indigo};
  margin: 10px 0;
`

export const Card = styled.div`
  background-color: ${theme.colors.lightGrey};
  border-radius: 2px;
  cursor: pointer;
  min-height: 235px;
  padding: 30px;
  width: 100%;
  font-family: Poppins;
  &:nth-of-type(1) {
    margin-bottom: 30px;
  }
`

export const UnderlineContainer = styled.span`
  border-bottom: 2px solid transparent;
  transition: border-bottom-color 200ms ease-out;
  ${Card}:hover & {
    border-bottom-color: ${theme.colors.eucalyptusGreen};
  }
`
export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 10px;
`

export const ReadLength = styled.span`
  margin-left: 4px;
`

export const NewsCategory = styled.div`
  border: 2px solid;
  background-color: ${props => props.backgroundColor};
  border-color: ${props => props.backgroundColor};
  border-radius: 4px;
  color: ${props => getMostReadable(props.textColor)};
  cursor: pointer;
  font-family: Poppins;
  font-size: 16px;
  height: 32px;
  padding: 4px 8px;
  white-space: nowrap;
  text-align: center;
  margin-bottom: 23px;
`

export const NewsMetrics = styled.span`
  color: ${theme.colors.darkGrey};
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: normal;
  white-space: nowrap;
`
