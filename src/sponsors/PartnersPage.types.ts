export interface AllContentfulSponsor {
  edges: [
    {
      node: {
        sponsorName: string
        sponsorUrl: string
        sponsorLogo: {
          sizes: {
            src: string
          }
        }
        sponsorLevel: string
      }
    }
  ]
}

export interface Sponsor {
  name: string
  url: string
  logo: string
  level: string
}
