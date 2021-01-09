import React from 'react'
import { BlogArticlePageProps } from './BlogArticlePage.types'

export const BlogArticlePage: React.FC<BlogArticlePageProps> = ({
  data: { contentfulBlogArticle: article },
}) => {
  console.log('article: ', article)
  return <h1>blah</h1>
}
