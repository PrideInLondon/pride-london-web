import styled from 'styled-components'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'

export const BannerSubtitle = styled.h2`
  color: #ffffff;
  font-size: 1rem;
  display: inline;
  background-color: ${theme.colors.indigo};
  line-height: 1.8;
  /* box-shadow: 10px 0 0 ${theme.colors.indigo}, -10px 0 0 ${
  theme.colors.indigo
}; */
  box-shadow: 0 0 0 10px ${theme.colors.indigo}, 0 0 0 ${theme.colors.indigo};
  box-decoration-break: clone;

  ${media.tablet`  
    font-size: 1.5rem;
  `};
`

export const BannerSubtitleWrapper = styled.div`
  max-width: 255px;
  margin-left: 10px;
  margin-bottom: 20px;

  ${media.tablet`  
    max-width: 520px;
  `};
`
