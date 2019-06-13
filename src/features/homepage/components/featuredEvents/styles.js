import styled from 'styled-components'
import { media } from '../../../../theme/media'

export const FeaturedEventContent = styled.div`
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

  .slick-prev {
    position: absolute;
    top: 50%;
    left: -70px;
    transform: translate(0, -50%);
  }

  .slick-next {
    position: absolute;
    top: 50%;
    right: -70px;
    transform: translate(0, -50%);
  }
`
