import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const FlexDiv = styled.div`
  display: flex;
`
export const ShareText = styled.span`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.43;
  letter-spacing: normal;
  color: ${theme.colors.darkGrey};
`
export const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  & > div {
    margin-bottom: 30px;
  }
  & span {
    color: ${theme.colors.darkGrey};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.43;
    letter-spacing: normal;
    white-space: nowrap;
  }
`
export const ReadLength = styled.span`
  margin-left: 4px;
`
export const Title = styled.h1`
  font-family: Poppins;
  font-size: 32px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.19;
  letter-spacing: normal;
  color: #2c2c81;
  margin-bottom: 30px;
  background-color: white;
`
