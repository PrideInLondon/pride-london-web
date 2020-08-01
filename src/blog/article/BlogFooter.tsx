import React from 'react'
import Author from './Author'
import { Summary, BlogFooterContainer } from './BlogFooter.styles'
import { PageContentProps } from './PageContent.types'

export const BlogFooter: React.FC<Pick<PageContentProps, 'author'>> = ({
  author,
}) => (
  <BlogFooterContainer>
    <hr />
    <Summary>{author && <Author author={author} />}</Summary>
  </BlogFooterContainer>
)
