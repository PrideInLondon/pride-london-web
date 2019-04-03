import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

const BannerSubtitle = styled.h2`
  color: #ffffff;
  font-size: 1rem;
  display: inline;
  background-color: ${theme.colors.indigo};
  line-height: 1.4;
  box-shadow: 10px 0 0 ${theme.colors.indigo}, -10px 0 0 ${theme.colors.indigo};
  box-decoration-break: clone;

  ${media.tablet`  
    font-size: 1.5rem;
  `};
`

const BannerSubtitleWrapper = styled.div`
  max-width: 255px;
  margin-left: 10px;
  margin-bottom: 20px;

  ${media.tablet`  
    max-width: 520px;
  `};
`

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
