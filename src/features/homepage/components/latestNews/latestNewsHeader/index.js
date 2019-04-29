import React from 'react'
import CTALink from '../../../../../components/ctaLink'
import { Header, Title, HiddeOnlyMobile } from './styles'

const LatestNewsHeader = () => (
  <Header>
    <Title>Latest News</Title>
    <HiddeOnlyMobile>
      <CTALink to="/blog">View all news</CTALink>
    </HiddeOnlyMobile>
  </Header>
)

export default LatestNewsHeader
