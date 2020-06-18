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
