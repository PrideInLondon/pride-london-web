import { Document } from '@contentful/rich-text-types'
import { FluidObject } from 'gatsby-image'
import { ContentfulTalentProfile } from '../../components/talentProfile/TalentProfile.types'

interface ContentfulBlogArticle {
  hero: {
    desktop: FluidObject
    tablet: FluidObject
    mobile: FluidObject
  }
  category: string
  title: string
  content: {
    json: Document
  }
  author: ContentfulTalentProfile
}

export interface BlogArticlePageProps {
  data: {
    contentfulBlogArticle: ContentfulBlogArticle
  }
  location: Location
}
