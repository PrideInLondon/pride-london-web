import { Document } from '@contentful/rich-text-types'
import { GatsbyImage } from "gatsby-plugin-image";
import { ContentfulTalentProfile } from '../../components/talentProfile/TalentProfile.types'

export interface ContentfulBlogArticleSummary {
  hero: {
    desktop: GatsbyImage
    tablet: GatsbyImage
    mobile: GatsbyImage
  }
  category: string
  title: string
}

export interface ContentfulBlogArticle extends ContentfulBlogArticleSummary {
  content: {
    json: Document
  }
  author: ContentfulTalentProfile
}

export interface BlogArticlePageProps {
  data: {
    contentfulBlogArticle: ContentfulBlogArticle
    otherContentfulBlogArticles: {
      edges: { node: ContentfulBlogArticleSummary }[]
    }
  }
  location: Location
}
