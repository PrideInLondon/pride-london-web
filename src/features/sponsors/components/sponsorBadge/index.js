import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import constants from '../../../../constants'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'

const isLargeBadge = level =>
  level === constants.sponsorLevels.headline ||
  level === constants.sponsorLevels.gold

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.white};
  margin: 0 10px 10px 0;
  padding: 10px;
  ${media.tablet`
    margin: 0 30px 30px 0;
  `};
  ${({ level }) =>
    isLargeBadge(level)
      ? css`
          height: 97px;
          width: calc(50% - 10px);
          ${media.tablet`
            height: 175px;
            width: 293px;
          `};
        `
      : css`
          height: 110px;
          width: calc(33.3333% - 10px);
          ${media.tablet`
            width: 185px;
          `};
        `};
`

const BadgeImage = styled.img`
  ${({ level }) =>
    isLargeBadge(level)
      ? css`
          max-height: 80px;
          max-width: 122px;
          ${media.tablet`
            max-height: 84px;
            max-width: 220px;
          `};
        `
      : css`
          max-height: 78px;
          max-width: 83px;
          ${media.tablet`
            max-height: 52px;
            max-width: 95px;
          `};
        `};
`

const NamePlaceholder = styled.h3`
  color: #9b9b9b;
  display: inline-block;
  margin: 0;
  padding: 15px;
  text-align: center;
`

const SponsorBadge = ({ logo, name, url, level }) => (
  <Badge level={level}>
    <a href={url} rel="noopener noreferrer" target="_blank">
      {logo ? (
        <BadgeImage src={logo} alt={name} level={level} />
      ) : (
        <NamePlaceholder>{name}</NamePlaceholder>
      )}
    </a>
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
