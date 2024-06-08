import { ContentfulSponsor, Sponsor, SponsorLevel } from './PartnersPage.types'

export const groupSponsorsByLevel = (
  edges: { node: ContentfulSponsor }[]
): { [key in SponsorLevel]?: Sponsor[] } => {
  const groupedSponsors = edges
    .map(
      ({ node: { sponsorName, sponsorUrl, sponsorLogo, sponsorLevel } }) => ({
        name: sponsorName,
        url: sponsorUrl,
        logo: sponsorLogo && sponsorLogo.sizes.src,
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

  // Sort sponsors by name within each level
  for (const level in groupedSponsors) {
    if (groupedSponsors.hasOwnProperty(level)) {
      groupedSponsors[level] = groupedSponsors[level]!.sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    }
  }

  return groupedSponsors
}
