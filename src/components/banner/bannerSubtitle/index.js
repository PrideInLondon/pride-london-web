import React from 'react'
import PropTypes from 'prop-types'
import { BannerSubtitle, BannerSubtitleWrapper } from './styles'

BannerSubtitleWrapper.displayName = 'SubtitleWrapper'
BannerSubtitle.displayName = 'SubtitleText'

const StyledBannerSubtitle = ({ children }) => (
  <BannerSubtitleWrapper>
    <BannerSubtitle>{children}</BannerSubtitle>
  </BannerSubtitleWrapper>
)

StyledBannerSubtitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default StyledBannerSubtitle
