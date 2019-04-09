import React from 'react'
import { Title, Header, Link, StyledChevronRight } from './styles'

const OtherArticlesHeader = () => (
  <Header>
    <Title>You may also like</Title>
    <Link>
      View all articles <StyledChevronRight />
    </Link>
  </Header>
)

export default OtherArticlesHeader
