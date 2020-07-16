import React from 'react'
import { NewsCardHeader } from '../../components/newsCardHeader'
import { MobileShareBar } from './PageContent.styles'
import { Title, SubHeader, BlogHeaderContainer } from './BlogHeader.styles'
import { PageContentProps } from './PageContent'

interface BlogHeaderProps
  extends Pick<PageContentProps, 'title' | 'category' | 'datePublished'> {
  readTime?: number
  body: string
}

export const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  datePublished,
  category,
  readTime,
  body,
}) => {
  let location = ''
  if (typeof window !== 'undefined') {
    location = window.location.href
  }
  return (
    <BlogHeaderContainer>
      <Title>{title}</Title>
      <MobileShareBar
        variant="horizontal"
        content={{
          title,
          body: body,
          url: location,
        }}
      />
      <SubHeader>
        <NewsCardHeader
          category={category}
          datePublished={datePublished}
          readTime={readTime}
        />
      </SubHeader>
    </BlogHeaderContainer>
  )
}
