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
      padding-left: 100px !important;
    }
  `};
`

export const HighlightBannerContent = styled.div`
  overflow: hidden;

  .slick-list {
    overflow: visible;
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

  ${media.tablet`
    .slick-list {
      overflow: hidden;
    }
  `};

  ${media.tabletMax`
    .slick-list {
      padding-left: 10px !important;
    }
  `};

  .slick-slider {
    position: static;
  }

  .slick-prev {
    position: absolute;
    top: 50%;
    left: 25px;
    transform: translate(0, -50%);
  }

  .slick-next {
    position: absolute;
    top: 50%;
    right: 25px;
    transform: translate(0, -50%);
  }
`
