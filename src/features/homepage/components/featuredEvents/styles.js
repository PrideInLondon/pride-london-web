import styled from 'styled-components'
import { media } from '../../../../theme/media'
import theme from '../../../../theme/theme'
import iconChevronLeft from '../../../../theme/assets/images/icon-chevron-left.svg'
import iconChevronRight from '../../../../theme/assets/images/icon-chevron-right.svg'

export const FeaturedEventContent = styled.div`
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
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-color: ${theme.colors.white};
    position: absolute;
    top: 50%;
    left: -70px;
    background: url(${iconChevronLeft}) ${theme.colors.white} 50% 50% no-repeat;
    transform: translate(0, -50%);

    &:before {
      content: none;
    }

    &:hover,
    &:focus {
      background: url(${iconChevronLeft}) ${theme.colors.white} 50% 50%
        no-repeat;
    }
  }

  .slick-next {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background-color: ${theme.colors.white};
    position: absolute;
    top: 50%;
    right: -70px;
    background: url(${iconChevronRight}) ${theme.colors.white} 50% 50% no-repeat;
    transform: translate(0, -50%);

    &:before {
      content: none;
    }

    &:hover,
    &:focus {
      background: url(${iconChevronRight}) ${theme.colors.white} 50% 50%
        no-repeat;
    }
  }
`
