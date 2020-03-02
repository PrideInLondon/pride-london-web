import React from 'react'
import PropTypes from 'prop-types'
import { StyledBannerTitle, BannerTitleWrapper } from './BannerTitle.styles'

const BannerTitle = ({ children }) => (
  <BannerTitleWrapper>
    <StyledBannerTitle>{children}</StyledBannerTitle>
  </BannerTitleWrapper>
)

BannerTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default BannerTitle
