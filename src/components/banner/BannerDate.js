import React from 'react'
import PropTypes from 'prop-types'
import { StyledBannerDate, BannerDateWrapper } from './BannerDate.styles'

const BannerDate = ({ children }) => (
  <BannerDateWrapper>
    <StyledBannerDate>{children}</StyledBannerDate>
  </BannerDateWrapper>
)

BannerDate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default BannerDate
