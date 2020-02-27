import styled from 'styled-components'
import { media } from '../theme/media'

export const AnnouncementsSliderWrapper = styled.div`
  .slick-list {
    overflow: visible;
    padding-left: 0 !important;
    margin-left: -10px;
  }

  .slick-track {
    display: flex;

    .slick-slide {
      display: flex;
      height: auto;

      & > div {
        height: 100%;
        width: 100%;

        & > div {
          height: 100%;

          & > a {
            height: 100%;
          }
        }
      }
    }
  }

  ${media.desktop`
    .slick-list {
      margin-left: -15px;
    }
  `};
`
