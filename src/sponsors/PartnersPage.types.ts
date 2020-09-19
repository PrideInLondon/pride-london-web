export const SPONSOR_LEVELS = [
  'Headline',
  'Gold',
  'Silver',
  'Bronze',
  'Partners',
  'Supporters',
  'Media Partners',
  'Digital Partners',
  'Unlisted',
] as const

export type SponsorLevel = typeof SPONSOR_LEVELS[number]

export type ContentfulSponsor = {
  sponsorName: string
  sponsorUrl: string
  sponsorLogo: {
    sizes: {
      src: string
    }
  }
  sponsorLevel: SponsorLevel
}

export interface Sponsor {
  name: string
  url: string
  logo: string
  level: SponsorLevel
}
