import { ContentfulSponsor, Sponsor, SponsorLevel } from './PartnersPage.types'
import { getSrcSet } from "gatsby-plugin-image"


export const groupSponsorsByLevel = (
  edges: { node: ContentfulSponsor }[]
): { [key in SponsorLevel]?: Sponsor[] } =>
  edges
    .map(
      ({ node: { sponsorName, sponsorUrl, sponsorLogo, sponsorLevel } }) => ({
        name: sponsorName,
        url: sponsorUrl,
        logo: sponsorLogo,
        level: sponsorLevel,
      })
    )
    .reduce(
      (
        sponsors: { [key in SponsorLevel]?: Sponsor[] },
        sponsor: Sponsor
      ): { [key in SponsorLevel]?: Sponsor[] } => ({
        ...sponsors,
        [sponsor.level]: [sponsor, ...(sponsors[sponsor.level] || [])],
      }),
      {}
    )
