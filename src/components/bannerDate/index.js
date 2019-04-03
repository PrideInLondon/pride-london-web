import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

const BannerDate = styled.p`
  color: #ffffff;
  font-size: 0.888rem;
  font-family: ${theme.fonts.title};
  font-weight: 600;
  display: inline-block;
  background-color: ${theme.colors.pink};
  line-height: 2;
  box-shadow: 10px 0 0 ${theme.colors.pink}, -10px 0 0 ${theme.colors.pink};
  box-decoration-break: clone;
  margin-bottom: 0;

  ${media.tablet`  
    font-size: 1.111rem;
  `};
`

const BannerDateWrapper = styled.div`
  max-width: 255px;
  margin-left: 10px;
  margin-bottom: 0;

  ${media.tablet`  
    max-width: 520px;
  `};
`

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
