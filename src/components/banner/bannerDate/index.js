import React from 'react'
import PropTypes from 'prop-types'
import { BannerDate, BannerDateWrapper } from './styles'

const StyledBannerDate = ({ children }) => (
  <BannerDateWrapper>
    <BannerDate>{children}</BannerDate>
  </BannerDateWrapper>
)

StyledBannerDate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
}

export default StyledBannerDate
