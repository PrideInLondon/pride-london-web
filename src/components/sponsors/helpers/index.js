import React from 'react'
import SponsorBadge from '../components/sponsorBadge'

const renderSponsors = (sponsors = [], preventLevelSize = false) =>
  sponsors.map(sponsor => (
    <SponsorBadge
      key={sponsor.name}
      {...sponsor}
      preventLevelSize={preventLevelSize}
    />
  ))

export default renderSponsors
