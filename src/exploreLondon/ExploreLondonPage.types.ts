import { FluidObject } from 'gatsby-image'

interface PartnerLocation {
  lon: number
  lat: number
}
interface PartnerDescription {
  description: string
}
interface PartnerFeaturedImage {
  id: string
  fixed: FluidObject
}
interface ContentfulPartnerEntry {
  id: string
  venueName: string
  location: PartnerLocation
  addressLine1: string
  addressLine2: string
  city: string
  postcode: string
  description: PartnerDescription
  category: string[]
  accessibilityDetails: string
  genderNeutralToilets: boolean
  featuredImage: PartnerFeaturedImage
  websiteUrl: string
  twitterUrl: string
  facebookUrl: string
  instagramUrl: string
}

export interface ExploreLondonPageProps {
  data: {
    allContentfulCommunityPartner: {
      edges: {
        node: ContentfulPartnerEntry
      }[]
    }
  }
}
