import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const CardTitle = styled.h3`
  color: ${theme.colors.indigo};
  margin: 10px 0;
`

export const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 15px;
  min-height: 135px;
  padding: 30px 20px;
  width: 100%;
  font-family: Poppins;
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
  align-items: center;
  height: 30px;
  margin-bottom: 10px;
`

export const NewsDate = styled.span`
  color: ${theme.colors.darkGrey};
  font-size: 12px;
  margin-left: 5px;
  margin-right: 4px;
  white-space: nowrap;
`

export const ReadLength = styled(NewsDate)`
  margin-left: 3px;
`
