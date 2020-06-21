import React from 'react'
import { Badge, BadgeImage, NamePlaceholder } from './SponsorBadge.styles'
import { Sponsor } from './PartnersPage.types'

const SponsorBadge = ({
  logo,
  name,
  url,
  level,
  preventLevelSize,
}: Sponsor & { preventLevelSize: boolean }) => (
  <Badge
    level={level}
    href={url}
    rel="noopener noreferrer"
    target="_blank"
    preventLevelSize={preventLevelSize}
  >
    {logo ? (
      <BadgeImage
        src={logo}
        alt={name}
        level={level}
        preventLevelSize={preventLevelSize}
      />
    ) : (
      <NamePlaceholder>{name}</NamePlaceholder>
    )}
  </Badge>
)

export default SponsorBadge
