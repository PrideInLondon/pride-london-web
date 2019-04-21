import React from 'react'
import PropTypes from 'prop-types'
import constants from '../../../../constants'
import { Badge, BadgeImage, NamePlaceholder } from './styles'

const SponsorBadge = ({ logo, name, url, level }) => (
  <Badge level={level} href={url} rel="noopener noreferrer" target="_blank">
    {logo ? (
      <BadgeImage src={logo} alt={name} level={level} />
    ) : (
      <NamePlaceholder>{name}</NamePlaceholder>
    )}
  </Badge>
)

SponsorBadge.propTypes = {
  logo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  level: PropTypes.oneOf(
    Object.keys(constants.sponsorLevels).map(
      key => constants.sponsorLevels[key]
    )
  ).isRequired,
}

export default SponsorBadge
