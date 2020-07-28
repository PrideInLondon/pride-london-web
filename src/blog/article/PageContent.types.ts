import { Document } from '@contentful/rich-text-types'

interface Category {
  title: string
  hexColor: string
}

export interface Thumbnail {
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
