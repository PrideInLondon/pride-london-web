import React from 'react'
import PropTypes from 'prop-types'
import { BannerTitleWrapper, BannerTitle } from './styles'

const StyledBannerTitle = ({ children }) => (
  <BannerTitleWrapper>
    <BannerTitle>{children}</BannerTitle>
  </BannerTitleWrapper>
)

StyledBannerTitle.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default StyledBannerTitle
