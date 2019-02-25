import React from 'react'
import styled from 'styled-components'
import theme from '../../../../theme/theme'
import NewsFilter from '../newsFilter';

const Card = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 2px;
  margin-bottom: 15px;
  min-height: 135px;
  width: 100%;
`

const NewsCard = ({ type }) => (
  <Card>
    <NewsFilter filterType={type}/>
    News Card!
  </Card>
)

export default NewsCard