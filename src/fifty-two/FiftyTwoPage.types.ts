import { Document } from '@contentful/rich-text-types'

export interface FiftyTwoPageProps {
  data: {
    contentfulCustomPageContent: {
      title: string
      subtitle: string
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
