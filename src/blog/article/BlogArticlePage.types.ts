import { Document } from '@contentful/rich-text-types'
import { FluidObject } from 'gatsby-image'
import { ContentfulTalentProfile } from '../../components/talentProfile/TalentProfile.types'

export interface ContentfulBlogArticleSummary {
  hero: {
    desktop: FluidObject
    tablet: FluidObject
    mobile: FluidObject
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
    site: {
      siteMetadata: {
        siteUrl: string
      }
    }
    contentfulBlogArticle: ContentfulBlogArticle
    otherContentfulBlogArticles: {
      edges: { node: ContentfulBlogArticleSummary }[]
    }
  }
  location: Location
}
