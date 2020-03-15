import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledBannerSubtitle,
  BannerSubtitleWrapper,
} from './BannerSubtitle.styles'

BannerSubtitleWrapper.displayName = 'SubtitleWrapper'
StyledBannerSubtitle.displayName = 'SubtitleText'

const BannerSubtitle = ({ children }) => (
  <BannerSubtitleWrapper>
    <StyledBannerSubtitle>{children}</StyledBannerSubtitle>
  </BannerSubtitleWrapper>
)

BannerSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default BannerSubtitle
