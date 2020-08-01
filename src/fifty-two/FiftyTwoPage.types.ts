import { Document } from '@contentful/rich-text-types'
import { FluidObject, FixedObject } from 'gatsby-image'

interface ContentfulGalleryEntry {
  artist: {
    name: string
  }
  artwork: {
    title: string
    year: string
    sold: boolean
    guidePrice: string
    image: {
      tablet: FluidObject
      mobile: FluidObject
    }
    category: string
  }
}

export interface FiftyTwoPageProps {
  data: {
    content: {
      title: string
      subtitle: string
      bannerImage: {
        desktop: FixedObject
        tablet: FixedObject
        mobile: FixedObject
      }
      bodyText: {
        json: Document
      }
      cta: {
        ctaTitle: string
        bodyText: string
        buttonUrl: string
        buttonText: string
      }
    }
    entries: {
      edges: { node: ContentfulGalleryEntry }[]
    }
  }
}
