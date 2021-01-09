import { Document } from '@contentful/rich-text-types'
import { ContentfulTalentProfile } from '../../components/talentProfile/TalentProfile.types'

interface ContentfulBlogArticle {
  hero: {
    image: {
      file: {
        url: string
      }
    }
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
}
