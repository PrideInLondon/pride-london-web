import { v4 as uuid } from 'uuid'
import { groupSponsorsByLevel } from './sponsors.utils'
import { SponsorLevel, ContentfulSponsor } from './PartnersPage.types'

describe('groupSponsorsByLevel', () => {
  const generateSponsorNodes = (
    level: SponsorLevel,
    count: number
  ): { node: ContentfulSponsor }[] =>
    Array.from(Array(count).keys()).map(_ => ({
      node: {
        sponsorName: uuid(),
        sponsorUrl: uuid(),
        sponsorLogo: {
          sizes: {
            src: uuid(),
          },
        },
        sponsorLevel: level,
      },
    }))

  it('should group sponsors by their level', () => {
    const HEADLINES = generateSponsorNodes('Headline', 1)
    const GOLD = generateSponsorNodes('Gold', 3)
    const SILVER = generateSponsorNodes('Silver', 2)
    const sponsors = [...HEADLINES, ...GOLD, ...SILVER]

    const actual = groupSponsorsByLevel(sponsors)

    // only the 3 sponsor levels defined above
    expect(Object.keys(actual)).toHaveLength(3)

    const validateSponsorGroup = (
      inputNodes: { node: ContentfulSponsor }[],
      level: SponsorLevel
    ) =>
      inputNodes.map(({ node: { sponsorName } }) => {
        expect(actual[level]).toContainEqual(
          expect.objectContaining({ name: sponsorName, level })
        )
      })

    // check headline sponsors
    expect(actual.Headline).toHaveLength(HEADLINES.length)
    validateSponsorGroup(HEADLINES, 'Headline')

    // check gold sponsors
    expect(actual.Gold).toHaveLength(GOLD.length)
    validateSponsorGroup(GOLD, 'Gold')

    // check silver sponsors
    expect(actual.Silver).toHaveLength(SILVER.length)
    validateSponsorGroup(SILVER, 'Silver')
  })
})
