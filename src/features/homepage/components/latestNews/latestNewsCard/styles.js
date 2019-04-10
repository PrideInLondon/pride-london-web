import styled from 'styled-components'
import { default as NewsCardHeaderOryg } from '../../../../../components/newsCardHeader'
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
export const NewsCardHeader = styled(NewsCardHeaderOryg)`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  & > * {
    font-size: 16px;
    line-height: 1.25;
  }
  & > *:nth-child(1) {
    padding: 4px 18px;
    margin-bottom: 23px;
  }
`
