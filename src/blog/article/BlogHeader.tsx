import React from 'react'
import { NewsCardHeader } from '../../components/newsCardHeader'
import { MobileShareBar } from './PageContent.styles'
import { Title, SubHeader, BlogWrapper } from './BlogHeader.styles'
import { PageContentProps } from './PageContent.types'

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
  const offset = 140
  return (
    <BlogWrapper
      paddingTop={{ default: 'lg', md: 'xl_mob' }}
      marginTop={{ default: 0, md: `-${offset}px` }}
      minHeight={`${offset}px`}
    >
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
    </BlogWrapper>
  )
}
