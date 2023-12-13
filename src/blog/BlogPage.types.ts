import { GatsbyImage } from "gatsby-plugin-image";
import { ContentfulBlogArticleSummary } from './article/BlogArticlePage.types'

export interface BlogPageProps {
  data: {
    content: {
      title: string
      subtitle: string
      bannerImage: {
        desktop: GatsbyImage
        tablet: GatsbyImage
        mobile: GatsbyImage
      }
    }
    blogArticles: {
      edges: { node: ContentfulBlogArticleSummary }[]
    }
  }
}
