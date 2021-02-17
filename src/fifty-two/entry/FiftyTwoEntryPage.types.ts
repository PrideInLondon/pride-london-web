import { Document } from '@contentful/rich-text-types'
import { FluidObject } from 'gatsby-image'
import { PageLinkDetails } from '../../components/pageSwitcher/PageSwitcher'
import { ContentfulTalentProfile } from '../../components/talentProfile/TalentProfile.types'

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
    tablet: FluidObject
    mobile: FluidObject
  }
}

export interface ContentfulFiftyTwoGalleryEntry {
  artwork: Artwork
  artist: ContentfulTalentProfile
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
