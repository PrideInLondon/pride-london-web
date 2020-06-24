import { ContentfulSponsor } from '../../sponsors/PartnersPage.types'

export interface FooterProps {
  facebook: string
  twitter: string
  instagram: string
  youtube: string
  linkedin: string
  snapchat: string
  data: {
    allContentfulSponsor: { edges: { node: ContentfulSponsor }[] }
  }
}
