import styled from 'styled-components'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'

export const BannerDate = styled.p`
  color: #ffffff;
  font-size: 0.888rem;
  font-family: ${theme.fonts.title};
  font-weight: 600;
  display: inline;
  background-color: ${theme.colors.pink};
  line-height: 1.8;
  box-shadow: 5px 0 0 5px ${theme.colors.pink},
    -5px 0 0 5px ${theme.colors.pink};
  box-decoration-break: clone;

  ${media.tablet`  
    font-size: 1.111rem;
  `};
`

export const BannerDateWrapper = styled.div`
  max-width: 255px;
  margin-left: 10px;
  margin-bottom: 0;

  ${media.tablet`  
    max-width: 520px;
  `};
`
