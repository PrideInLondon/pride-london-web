import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const FeaturedEventContent = styled.div`
  overflow: hidden;

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    justify-content: center;

    .slick-slide {
      display: flex;
      height: auto;
      max-width: 340px;

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
