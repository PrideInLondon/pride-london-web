import { Document } from '@contentful/rich-text-types'
import { PageLinkDetails } from '../../components/pageSwitcher/PageSwitcher'

export interface Artwork {
  id: string
  title: string
  category: string
  info: string
  year: string
  guidePrice: string
  sold: boolean
  description: {
    json: Document
  }
}

export interface Artist {
  id: string
  name: string
  website: string
  instagram: string
  email: string
  facebook: string
  twitter: string
  bio: {
    json: Document
  }
}

interface ContentfulFiftyTwoGalleryEntry {
  artwork: Artwork
  artist: Artist
}

export interface FiftyTwoEntryPageProps {
  data: {
    contentfulFiftyTwoGalleryEntry: ContentfulFiftyTwoGalleryEntry
  }
  pageContext: {
    prev: PageLinkDetails
    next: PageLinkDetails
  }
}
