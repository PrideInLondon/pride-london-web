import React from 'react'
import SponsorBadge from './SponsorBadge'

export const renderSponsors = (sponsors = [], preventLevelSize = false) =>
  sponsors.map(sponsor => (
    <SponsorBadge
      key={sponsor.name}
      {...sponsor}
      preventLevelSize={preventLevelSize}
    />
  ))
