import React from 'react'
import CTALink from '../../../../../components/ctaLink'
import { Header, Title } from './styles'

const LatestNewsHeader = () => (
  <Header>
    <Title>Latest News</Title>
    <CTALink to="/blog">View all news</CTALink>
  </Header>
)

export default LatestNewsHeader
