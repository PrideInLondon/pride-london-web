import React from 'react'

import {
  StyledLink,
  Title,
  Header,
  StyledChevronIcon,
} from './OtherArticlesHeader.styles'

const OtherArticlesHeader = () => (
  <Header>
    <Title>You may also like</Title>
    <StyledLink to="/news-and-views">
      View all articles <StyledChevronIcon />
    </StyledLink>
  </Header>
)

export default OtherArticlesHeader
