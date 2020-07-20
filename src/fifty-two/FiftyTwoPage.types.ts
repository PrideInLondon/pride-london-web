import { Document } from '@contentful/rich-text-types'
import { FixedObject } from 'gatsby-image'

export interface FiftyTwoPageProps {
  data: {
    contentfulCustomPageContent: {
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
  }
}
