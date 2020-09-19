import { ContentfulSponsor } from '../../sponsors/PartnersPage.types'

export interface FooterProps {
  socials: {
    facebook: string
    twitter: string
    instagram: string
    'you-tube': string
    'linked-in': string
    snapchat: string
  }
  data: {
    allContentfulSponsor: { edges: { node: ContentfulSponsor }[] }
  }
}
