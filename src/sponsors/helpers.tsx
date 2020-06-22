import React from 'react'
import SponsorBadge from './SponsorBadge'
import { Sponsor } from './PartnersPage.types'

export const renderSponsors = (
  sponsors: Sponsor[] = [],
  preventLevelSize = false
) =>
  sponsors.map(sponsor => (
    <SponsorBadge
      key={sponsor.name}
      {...sponsor}
      preventLevelSize={preventLevelSize}
    />
  ))
