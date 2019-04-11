import styled from 'styled-components'
import { default as NewsCardOryg } from '../../../blog/components/newsCard'
import theme from '../../../../theme/theme'

export const Container = styled.div`
  background-color ${theme.colors.white};
  padding-bottom: 4rem;
`
export const SecondaryNews = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const NewsCard = styled(NewsCardOryg)`
  background-color: ${theme.colors.lightGrey};
  border-radius: 2px;
  cursor: pointer;
  min-height: 235px;
  padding: 30px;
  width: 100%;
  font-family: Poppins;
  margin-bottom: 0;
  &:nth-of-type(1) {
    margin-bottom: 30px;
  }
  & > *:nth-child(1) {
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
  }
`
