import React from 'react'
import { Document } from '@contentful/rich-text-types'
import { Wrapper } from '../../components/wrapper/Wrapper'
import { BlogHeader } from './BlogHeader'
import { BlogContent } from './blogContent'
import { BlogFooter } from './BlogFooter'
import { ShareBarWrapper, DesktopShareBar } from './PageContent.styles'
export interface Category {
  title: string
  hexColor: string
}

interface Thumbnail {
  file: { url: string }
  id: string
}
interface Author {
  displayName?: string
  thumbnail?: Thumbnail
  jobTitle?: string
}

interface Article {
  json: Document
}
export interface PageContentProps {
  article: Article
  title: string
  datePublished: string
  category: Category
  author: Author
}

export const PageContent: React.FC<PageContentProps> = ({
  article,
  title,
  datePublished,
  category,
  author,
}) => {
  const availableText =
    article.json.content[0].content[0].nodeType === 'text'
      ? article.json.content[0].content[0].value
      : ''
  const body = JSON.stringify(availableText)
  let location = ''
  if (typeof window !== 'undefined') {
    location = window.location.href
  }
  return (
    <>
      <BlogHeader
        title={title}
        datePublished={datePublished}
        category={category}
        body={body}
      />
      <Wrapper position="relative">
        <ShareBarWrapper>
          <DesktopShareBar
            variant="vertical"
            content={{
              title,
              body: body,
              url: location as string,
            }}
          />
        </ShareBarWrapper>

        <BlogContent article={article} />
        <BlogFooter author={author} />
      </Wrapper>
    </>
  )
}
