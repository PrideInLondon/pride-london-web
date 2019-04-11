import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const DonateWrapper = styled.div`
  padding: 15px 15px 20px 15px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;

  ${media.tablet`
    width: 75%;
    padding-bottom: 50px;
  `};

  ${media.desktopHD`
    width: 65%;
  `};

  ${media.desktopHD`
    width: 55%;
  `};
`
