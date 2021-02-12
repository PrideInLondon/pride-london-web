import { FixedObject } from 'gatsby-image'

export interface BlogPageProps {
  data: {
    contentfulCustomPageContent: {
      title: string
      subtitle: string
      bannerImage: {
        desktop: FixedObject
        tablet: FixedObject
        mobile: FixedObject
      }
    }
  }
}
