import styled from 'styled-components'
import { media } from '../theme/media'

export const BgDonateWrapper = styled.div`
  position: relative;
  margin: 20px 0;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 73%;
    z-index: -10;
    background-color: #efefef;
  }
`

export const DonateWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 830px;

  ${media.desktopHD`
    padding: 20px 0;
  `};
`
