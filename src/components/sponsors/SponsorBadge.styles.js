import styled, { css } from 'styled-components'
import { media } from '../../theme/media'
import constants from '../../constants'

export const isLargeBadge = level =>
  level === constants.sponsorLevels.headline ||
  level === constants.sponsorLevels.gold

export const Badge = styled.a`
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  margin: 0 10px 10px 0;
  padding: 10px;
  ${media.tablet`
    margin: 0 30px 30px 0;
  `};
  ${({ level, preventLevelSize }) =>
    isLargeBadge(level) && !preventLevelSize
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

export const BadgeImage = styled.img`
  ${({ level, preventLevelSize }) =>
    isLargeBadge(level) && !preventLevelSize
      ? css`
          max-height: 48%;
          max-width: 75%;
        `
      : css`
          max-height: 48%;
          max-width: 80%;
        `};
`

export const NamePlaceholder = styled.h3`
  color: #9b9b9b;
  display: inline-block;
  margin: 0;
  padding: 15px;
  text-align: center;
`
