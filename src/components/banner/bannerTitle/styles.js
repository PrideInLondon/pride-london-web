import styled from 'styled-components'
import { media } from '../../../theme/media'
import theme from '../../../theme/theme'

export const BannerTitleWrapper = styled.div`
  margin-left: 10px;
  max-width: 80%;
`

export const BannerTitle = styled.h1`
  display: inline;
  box-shadow: 8px 0 0 2px ${theme.colors.white},
    -8px 0 0 2px ${theme.colors.white};
  box-decoration-break: clone;
  background-color: ${theme.colors.white};
  color: ${theme.colors.indigo};
  font-size: 1.75rem;
  line-height: 1.57;

  ${media.tablet`
    font-size: 3.5rem;
    max-width: 740px;
    line-height: 1.6;
    box-shadow: 5px 0 0 5px ${theme.colors.white},
    -5px 0 0 5px ${theme.colors.white};
  `};
`
