import { FixedObject } from 'gatsby-image'
import { ContentfulBlogArticleSummary } from './article/BlogArticlePage.types'

export interface BlogPageProps {
  data: {
    content: {
      title: string
      subtitle: string
      bannerImage: {
        desktop: FixedObject
        tablet: FixedObject
        mobile: FixedObject
      }
    }
    blogArticles: {
      edges: { node: ContentfulBlogArticleSummary }[]
    }
  }
}
