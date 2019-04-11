import styled from 'styled-components'
import { media } from '../../theme/media'
import theme from '../../theme/theme'

export const BannerTitleWrapper = styled.div`
  margin-left: 10px;
  max-width: 80%;
`

export const BannerTitle = styled.h1`
  margin: 0;
  display: inline;
  box-shadow: 10px 0 0 ${theme.colors.white}, -10px 0 0 ${theme.colors.white};
  box-decoration-break: clone;
  background-color: white;
  color: ${theme.colors.indigo};
  font-size: 1.75rem;
  line-height: 1.4;

  ${media.tablet`
    font-size: 3.5rem;
    max-width: 740px;
  `};
`
