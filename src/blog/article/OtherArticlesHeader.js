import React from 'react'
import {
  Title,
  Header,
  Link,
  StyledChevronIcon,
} from './OtherArticlesHeader.styles'

const OtherArticlesHeader = () => (
  <Header>
    <Title>You may also like</Title>
    <Link href="/news-and-views">
      View all articles <StyledChevronIcon />
    </Link>
  </Header>
)

export default OtherArticlesHeader
