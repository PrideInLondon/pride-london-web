import styled from 'styled-components'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'

export const BannerSubtitle = styled.h2`
  color: ${theme.colors.white};
  font-size: 1rem;
  font-weight: 600;
  display: inline;
  background-color: ${theme.colors.indigo};
  line-height: 1.87;
  box-shadow: 7px 0 0 3px ${theme.colors.indigo},
    -7px 0 0 3px ${theme.colors.indigo};
  box-decoration-break: clone;
  margin-bottom: 0;

  ${media.tablet`  
    font-size: 1.5rem;
    line-height: 1.8;
    box-shadow: 5px 0 0 5px ${theme.colors.indigo},
    -5px 0 0 5px ${theme.colors.indigo};
  `};
`

export const BannerSubtitleWrapper = styled.div`
  max-width: 255px;
  margin-left: 10px;

  ${media.tablet`  
    max-width: 520px;
  `};

  ${media.desktop`  
    max-width: 600px;
  `};
`
