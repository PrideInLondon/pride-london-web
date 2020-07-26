import { Document } from '@contentful/rich-text-types'
import { FixedObject } from 'gatsby-image'
import { PageLinkDetails } from '../../components/pageSwitcher/PageSwitcher'

export interface Artwork {
  title: string
  category: string
  info: string
  year: string
  guidePrice: string
  sold: boolean
  description: {
    json: Document
  }
  image: {
    tablet: FixedObject
    mobile: FixedObject
  }
}

export interface Artist {
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
