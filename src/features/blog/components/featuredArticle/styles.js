import styled from 'styled-components'
import theme from '../../../../theme/theme'

export const FeaturedArticleCard = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 2px;
  padding: 30px 15px;
  width: 90%;
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
