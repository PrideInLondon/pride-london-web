import React, { Fragment } from 'react'
// import styled from 'styled-components'
// import { Container, Row, Column } from '../components/grid'
// import { media } from '../theme/media'
import ImageBanner from '../components/imageBanner'
import theme from '../theme/theme'
import ViewsContainer from '../features/blog/containers/viewsContainer'
import NewsContainer from '../features/blog/containers/newsContainer'
import StyledHR from '../components/horizontalRule'

const Blog = () => (
  <Fragment>
    <ImageBanner
      titleText="The Voice of Pride in London"
      subtitleText="Find out what we're talking about in the Pride in London Community"
      altText=""
      color={theme.colors.beachBlue}
      large
      allowContentUnderflow
    />
    <ViewsContainer />
    <StyledHR />
    <NewsContainer />
  </Fragment>
)

export default Blog
