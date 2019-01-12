import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../theme/media'

const BannerTitleWrapper = styled.div`
  margin-left: 10px;
  max-width: 80%;
`

const BannerTitle = styled.h1`
  margin: 0;
  display: inline;
  box-shadow: 10px 0 0 ${props => props.theme.colors.white},
    -10px 0 0 ${props => props.theme.colors.white};
  box-decoration-break: clone;
  background-color: white;
  color: ${props => props.theme.colors.indigo};
  font-size: 1.75rem;
  line-height: 1.4;

  ${media.tablet`
    font-size: 3.5rem;
    max-width: 740px;
  `};
`

BannerTitle.displayName = 'TestBannerTitle'

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
