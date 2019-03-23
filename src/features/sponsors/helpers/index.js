import React from 'react'
import SponsorBadge from '../components/sponsorBadge'

const renderSponsors = (sponsors = []) =>
  sponsors.map(sponsor => <SponsorBadge key={sponsor.name} {...sponsor} />)

export default renderSponsors
