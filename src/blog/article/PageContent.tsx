import React from 'react'
import { Wrapper } from '../../components/wrapper/Wrapper'
import { BlogHeader } from './BlogHeader'
import { BlogWrapper } from './BlogHeader.styles'
import { BlogContent } from './blogContent'
import { BlogFooter } from './BlogFooter'
import { ShareBarWrapper, DesktopShareBar } from './PageContent.styles'
import { PageContentProps } from './PageContent.types'

export const PageContent: React.FC<PageContentProps> = ({
  article,
  title,
  datePublished,
  category,
  author,
}) => {
  const availableContent =
    article.json.content[0].content[0] &&
    article.json.content[0].content[0].nodeType === 'text'
      ? article.json.content[0].content[0].value
      : ''
  const body = JSON.stringify(availableContent)
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
              url: location,
            }}
          />
        </ShareBarWrapper>
        <BlogWrapper>
          <BlogContent article={article} />
          <BlogFooter author={author} />
        </BlogWrapper>
      </Wrapper>
    </>
  )
}
